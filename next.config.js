const withSass = require('@zeit/next-sass')
const withOptimizedImages = require('next-optimized-images');


module.exports = withOptimizedImages(withSass({
  experimental: {
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  }
}))
