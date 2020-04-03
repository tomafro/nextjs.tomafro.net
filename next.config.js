const withOptimizedImages = require('next-optimized-images');


module.exports = withOptimizedImages({
  experimental: {
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  }
})
