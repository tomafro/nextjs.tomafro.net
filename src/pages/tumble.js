import Layout from "../shared/layout"
import itemFiles from "../data/tumble.json"

const items = itemFiles.map(name => {
  return require("../data/tumble/" + name).content
})

function Tumble() {
  console.log(items)
  return (
    <Layout>
      <ol className="links with-icons">
      {items.map(item => (
        <li>
          <span class="fa-li"><i className={item.props.icon}></i></span>
          <p>
          {item}
          </p>
        </li>
      ))}
      </ol>
    </Layout>
  )
}

export default Tumble
