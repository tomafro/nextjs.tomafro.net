import Layout from "../components/layout"

class Tumble extends React.Component {
  get items() {
    const items = this.props.paths.map(path => require("../data/tumble/" + path).default)
    return items.sort((a, b) => -a.props.date.localeCompare(b.props.date))
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
      <li key={item.props.date}>
        <span className="fa-li"><i className={item.props.icon}></i></span>
        <div>
          {item}
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
