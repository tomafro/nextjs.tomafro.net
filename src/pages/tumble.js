import Layout from "../shared/layout"
import itemFiles from "../data/tumble.json"

function Tumble({items}) {
  return (
    <Layout>
      <ol className="links with-icons">
      {items.map(item => (
        <li key={item.props.date}>
          <span className="fa-li"><i className={item.props.icon}></i></span>
          <p>
          {item}
          </p>
        </li>
      ))}
      </ol>
    </Layout>
  )
}

export async function getStaticProps() {
  const path = await import('path')
  const fs = await import("fs")
  const util = await import('util')

  const tumblePath = path.join(process.cwd(), "/src/data/tumble")
  const readdir = util.promisify(fs.readdir);

  const itemFiles = await readdir(tumblePath)
  const items = itemFiles.map(item => require("../data/tumble/" + item).content)

  return { props: {items: items} }
}

export default Tumble
