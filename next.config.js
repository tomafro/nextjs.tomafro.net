const withOptimizedImages = require('next-optimized-images');
const withMDX = require('@next/mdx')();

module.exports = withMDX(withOptimizedImages({
  experimental: {
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}))
