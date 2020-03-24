const withSass = require('@zeit/next-sass')

module.exports = withSass({
  experimental: {
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  }
})
