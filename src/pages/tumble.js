import Layout from "../components/layout"

class Item {
  constructor(path) {
    this.path = path
    this.content = require("../data/tumble/" + path).default
  }

  get date() {
    return "2020-01-01"
  }
}

class Tumble extends React.Component {
  get items() {
    const items = this.props.paths.map(path => new Item(path))
    return items.sort((a, b) => -a.date.localeCompare(b.date))
  }

  render() {
    return (
      <Layout>
        <ol className="links with-icons">
          {this.items.map(this.renderItem)}
        </ol>
      </Layout>
    )
  }

  renderItem(item) {
    return (
      <li key={item.date}>
        <span className="fa-li"><i className={item.content.props.icon}></i></span>
        <div>
          {item.content}
        </div>
      </li>
    )
  }
}

export async function getStaticProps() {
  const path = await import('path')
  const fs = await import("fs")
  const util = await import('util')

  const tumblePath = path.join(process.cwd(), "/src/data/tumble")
  const readdir = util.promisify(fs.readdir)

  const paths = await readdir(tumblePath)
  //const items = itemFiles.map(item => require("../data/tumble/" + item).default)

  return { props: {paths: paths} }
}

export default Tumble
