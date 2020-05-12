import { Layout, Project, ListWithIcons } from "components"

export * from "page/config"

function listItem({url, children, icon}) {
  return (
    <ListWithIcons.Item key={url} icon={icon}>
      { children }
    </ListWithIcons.Item>
  )
}

export default ({ paths }) => {
  const items = require("data").load(paths)
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
