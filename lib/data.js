function findPaths(kind) {
  const fs = require("fs")
  const path = require("path")
  const directory = path.join(process.cwd(), "data", kind)

  return fs.readdirSync(directory).sort().map(p => `projects/${p}`)
}

export function projectPaths() {
  return findPaths("projects")
}

function contentFor(module) {
  if (module.default.isMDXComponent) {
    const MDX = module.default
    return (
      <>
        <MDX />
      </>
    )
  }
  else {
    return module.default
  }
}

function itemFor(module) {
  return {
    children: contentFor(module),
    ...module
  }
}

export function load(paths) {
  return paths.map(path => itemFor(require("data/" + path)))
}
