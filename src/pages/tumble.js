import Layout from "../shared/layout"

class Tumble extends React.Component {
  render() {
    return (
      <Layout>
        <ol className="links with-icons">
          {this.props.items.map(this.renderItem)}
        </ol>
      </Layout>
    )
  }

  renderItem(item) {
    return (
      <li key={item.props.date}>
        <span className="fa-li"><i className={item.props.icon}></i></span>
        <p>
          {item}
        </p>
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

  const itemFiles = await readdir(tumblePath)
  const items = itemFiles.map(item => require("../data/tumble/" + item).content)

  return { props: {items: items} }
}

export default Tumble
