function contentFor(module) {
  if (module.default.isMDXComponent) {
    console.log(Object.keys(module))
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

function metadataFor(module) {
  return module.metadata || {}
}

export function fragmentFor(module) {
  return {
    content: contentFor(module),
    metadata: metadataFor(module)
  }
}

export function loadLink(path) {

}
