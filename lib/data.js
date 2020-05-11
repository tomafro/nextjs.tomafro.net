const fs = require("fs")
const path = require("path")

function paths(t) {
  const directory = path.join(process.cwd(), "data", t)
  return fs.readdirSync(directory).sort()
}

export function projectPaths() {
  return paths("projects")
}
