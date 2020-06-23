import { Layout, ListWithIcons } from "components"
import { load, byDate } from "data"

export * from "page/config"

function listItem({content, icon, path}) {
  return (
    <ListWithIcons.Item key={path} icon={icon}>
      { content }
    </ListWithIcons.Item>
  )
}

export default ({ paths }) => {
  const items = load(paths).sort(byDate).reverse()
  return (
    <Layout title="Projects">
      <ListWithIcons>
        { items.map(listItem) }
      </ListWithIcons>
    </Layout>
  )
}

export async function getStaticProps() {
  return { props: { paths: require("data").linkPaths() } }
}
