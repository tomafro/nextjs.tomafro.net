const withMDX = require('@next/mdx')();

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

    return config
  }
})
