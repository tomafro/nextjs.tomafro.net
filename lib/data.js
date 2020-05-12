function findPaths(kind) {
  const fs = require("fs")
  const path = require("path")
  const directory = path.join(process.cwd(), "data", kind)

  return fs.readdirSync(directory).sort().map(p => `${kind}/${p}`)
}

export function projectPaths() {
  return findPaths("projects")
}

export function linkPaths() {
  return findPaths("links")
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

const pathRx = /(?<date>\d{4}-\d{2}-\d{2})-(?<slug>.*)\.(?<ext>js|mdx)/

function pathData(path) {
  const matches = pathRx.exec(path)

  if (matches) {
    return matches.groups
  }
  else {
    return undefined
  }
}

function loadItem(path) {
  const module = require("data/" + path)

  return {
    path: path,
    ...pathData(path),
    children: contentFor(module),
    ...module
  }
}

export function load(paths) {
  return paths.map(path => loadItem(path))
}
