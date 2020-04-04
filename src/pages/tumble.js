import Layout from "components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const pathRx = /(?<date>\d{4}-\d{2}-\d{2})-(?<slug>.*)\.js/

class Item {
  constructor(path) {
    this.path = path
    this.pathData = pathRx.exec(path).groups
    this.content = require("../data/tumble/" + path).default
  }

  get date() {
    return this.pathData.date
  }

  get slug() {
    return this.pathData.slug
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
        <span className="fa-li"><FontAwesomeIcon icon="music" /></span>
        <div>
          {item.content}
        </div>
      </li>
    )
  }
}

export async function getStaticProps() {
  const loader = await import("support/loader")
  const paths = await loader.findPaths("/src/data/tumble")
  return { props: {paths: paths} }
}

export default Tumble
