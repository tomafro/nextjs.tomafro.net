import Layout from "../shared/layout"
import items from "../content/tumble/items"

function Tumble() {
  console.log(items[0])
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
