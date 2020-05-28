import { MDXProvider } from '@mdx-js/react'
import * as mdx from "mdx"

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
    const Content = module.default
    return (
      <MDXProvider components={mdx}>
        <Content/>
      </MDXProvider>
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
  const content = contentFor(module)
  const metadata = {
    path: path,
    ...pathData(path),
    ...content.props,
    ...module
  }

  delete metadata.children

  return {
    content: content,
    ...metadata,
  }
}

function compare(a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }

  return 0
}

export function byDate(a, b) {
  return compare(a.date, b.date)
}

export function load(paths) {
  return paths.map(path => loadItem(path))
}
