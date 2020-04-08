import Document, { Head, Main } from "next/document"

// Removes JavaScript files in document <head> in production.
// For HTML + CSS sites only (no javascript client side).
class CustomHead extends Head {
  render() {
    const res = super.render()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function transform(node) {
      // remove all link preloads
      if (
        node &&
        node.type === "link" &&
        node.props &&
        node.props.rel === "preload"
      ) {
        return null
      }
      if (node?.props?.children) {
        return {
          ...node,
          props: {
            ...node.props,
            children: Array.isArray(node.props.children)
              ? node.props.children.map(transform)
              : transform(node.props.children),
          },
        }
      }
      if (Array.isArray(node)) {
        return node.map(transform)
      }

      return node
    }

    return transform(res)
  }
}

class StaticDocument extends Document {
  render() {
    return (
      <html lang="en">
        <CustomHead />
        <body>
          <Main />
        </body>
      </html>
    )
  }
}

export default process.env.NODE_ENV === "production" ? StaticDocument : Document
