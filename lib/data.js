function findPaths(kind) {
  const fs = require("fs")
  const path = require("path")
  const directory = path.join(process.cwd(), "data", kind)

  return fs.readdirSync(directory).sort().map(p => `projects/${p}`)
}

export function projectPaths() {
  return findPaths("projects")
}

export function load(paths) {
  return paths.map(path => require("data/" + path))
}
