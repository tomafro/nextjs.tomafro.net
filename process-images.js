const sharp = require('sharp')
const lqip = require('lqip')
const fs = require('fs')
const hasha = require('hasha')
const glob = require("glob")


const createVariants = async function (imagePage) {
  const hash = hasha.fromFileSync(imagePage, { algorithm: 'md5' })
  console.log(hash)

  const inputImage = sharp(imagePage)
  const inputImageMetadata = await inputImage.metadata()
  const rx = /(?<name>[^\/]+)\.(?<ext>jpg|png)/
  const pathInfo = rx.exec(imagePage).groups

  const destinationBase = `images/${hash}`

  console.log(destinationBase)

  fs.mkdirSync(`public/${destinationBase}`, { recursive: true })
  fs.mkdirSync('data/images', { recursive: true })

  console.log(inputImageMetadata)

  const image = {
    width: inputImageMetadata.width,
    height: inputImageMetadata.height,
    lqip: await lqip.base64(imagePage)
  }

  const sizes = [1.0, 0.6, 0.36, 0.22, 0.13]

  const pngVariants = sizes.map(size => {
    const width = Math.round(image.width * size)
    const path = `${destinationBase}/${width}.png`
    sharp(imagePage).resize({ width: width }).png({ palette: true }).toFile(`public/${path}`)
    return { type: "image/png", width: width, path: path }
  })

  const webpVariants = sizes.map(size => {
    const width = Math.round(image.width * size)
    const path = `${destinationBase}/${width}.webp`
    sharp(imagePage).resize({ width: width }).webp({ smartSubsample: true, reductionEffort: 6 }).toFile(`public/${path}`)
    return { type: "image/webp", width: width, path: path }
  })

  const variants = webpVariants.concat(pngVariants).map(({ type, width, path }) => {
    return `{ type: "${type}", width: ${width}, image: "/${path}"}`
  })

  console.log(variants)

  // await sharp(imagePage).png({ palette: true }).toFile(`public/${destinationBase}.png`)
  // await sharp(imagePage).webp({ smartSubsample: true, reductionEffort: 6 }).toFile(`public/${destinationBase}.webp`)

  fs.writeFileSync(`data/images/${pathInfo.name}.js`,
    `export default {
    width: ${image.width},
    height: ${image.height},
    lqip: "${image.lqip}",
    variants: [
      ${variants.join(",\n    ")}
    ]
  }
  `)
}

images = glob.sync('data/images/*.+(png|jpg)', {})

for (let index = 0; index < images.length; index++) {
  createVariants(images[index])
}
