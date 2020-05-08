const withOptimizedImages = require('next-optimized-images');
const withMDX = require('@next/mdx')();

module.exports = withMDX(withOptimizedImages({
  experimental: {
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  }
}))
