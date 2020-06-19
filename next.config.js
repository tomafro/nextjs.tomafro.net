const PrebuildPlugin = require('prebuild-webpack-plugin');
const withMDX = require('@next/mdx')();
const sharp = require('sharp')
const lqip = require('lqip')
const fs = require('fs')

module.exports = withMDX({
  experimental: {
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages th at depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      use: [
        {
          loader: require.resolve('file-loader')  ,
          options: {
            publicPath: "/_next/static/images/",
            outputPath: "static/images",
            name: "[hash].[ext]",
            esModule: false
          }
        },
      ],
    })

    config.plugins.push(new PrebuildPlugin({
      build: async function(compiler, compilation, matchedFiles) {
        const destination = 'build/images'
        fs.mkdirSync(destination, { recursive: true })

        const inputPath = matchedFiles[0]
        const inputImage = sharp(inputPath)
        const inputImageMetadata = await inputImage.metadata()
        const rx = /(?<name>[^\/]+)\.(?<ext>jpg|png)/
        const pathInfo = rx.exec(inputPath).groups


        console.log(inputImageMetadata)

        const image = {
          width: inputImageMetadata.width,
          height: inputImageMetadata.height,
          lqip: await lqip.base64(inputPath)
        }

        const sizes = [0.6, 0.36, 0.22, 0.13]

        const pngVariants = sizes.map(size => {
          const width = Math.round(image.width * size)
          const path = `${destination}/${pathInfo.name}.${width}.png`
          sharp(inputPath).resize({ width: width }).png({ palette: true }).toFile(path)
          return { type: "image/png", width: width, path: path }
        })

        const webpVariants = sizes.map(size => {
          const width = Math.round(image.width * size)
          const path = `${destination}/${pathInfo.name}.${width}.webp`
          sharp(inputPath).resize({ width: width }).webp({ smartSubsample: true, reductionEffort: 6 }).toFile(path)
          return { type: "image/webp", width: width, path: path }
        })

        const variants = webpVariants.concat(pngVariants).map(({type, width, path}) => {
          return `{ type: "${type}", width: ${width}, image: require("${path}")}`
        })

        console.log(variants)

        await sharp(inputPath).png({ palette: true}).toFile (`${destination}/${pathInfo.name}.png`)
        await sharp(inputPath).webp({ smartSubsample: true, reductionEffort: 6 }).toFile(`${destination}/${pathInfo.name}.webp`)

        fs.writeFileSync(`${destination}/${pathInfo.name}.js`,
`export default {
  width: ${image.width},
  height: ${image.height},
  lqip: "${image.lqip}",
  variants: [
    ${variants.join(",\n    ")}
  ]
}
`)
      },
      watch: (compiler, compilation, changedFile) => {
        // function that runs each time webpack rebuilds in dev mode. if `files.pattern` is provided,
        // this function will only fire if the most recently changed file matches the specified pattern
      },
      // the files object allows for file matching, providing an array
      // of matching files as the last parameter to the `build` option.
      files: { pattern: 'data/images/*.+(png|jpg)', options: {}, addFilesAsDependencies: true },
    }))

    return config
  }
})
