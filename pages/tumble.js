import Layout from "components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fragmentFor } from "fragments"

export * from "page/config"

const pathRx = /(?<date>\d{4}-\d{2}-\d{2})-(?<slug>.*)\.(?<ext>js|mdx)/

class Item {
  constructor(path) {
    const module = require("links/" + path)
    this.fragment = fragmentFor(module)
    this.metadata = {
      ...module,
      ...this.fragment.content.props,
      ...pathRx.exec(path).groups,
      ...this.fragment.metadata
    }
  }

  get content() {
    return this.fragment.content
  }

  get date() {
    return this.metadata.date
  }

  get slug() {
    return this.metadata.slug
  }

  get icon() {
    return this.metadata.icon
  }
}

class Tumble extends React.Component {
  get items() {
    const items = this.props.paths.map(path => new Item(path))
    return items.sort((a, b) => -a.date.localeCompare(b.date))
  }

  render() {
    return (
      <Layout title="Tumble">
        <ol className="links with-icons">
          {this.items.map(this.renderItem)}
        </ol>
      </Layout>
    )
  }

  renderItem(item) {
    return (
      <li key={item.date + "-" + item.slug}>
        <span className="fa-li"><FontAwesomeIcon icon={item.icon}/></span>
        <div>
          {item.content}
        </div>
      </li>
    )
  }
}

export async function getStaticProps() {
  const loader = await import("support/loader")
  const paths = await loader.findPaths("links")
  return { props: {paths: paths} }
}

export default Tumble
