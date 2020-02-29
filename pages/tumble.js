import Layout from "../shared/layout"
import items from "../content/tumble/items"

function Tumble() {
  console.log(items[0])
  return (
    <Layout>
      {items}
    </Layout>
  )
}

export default Tumble
