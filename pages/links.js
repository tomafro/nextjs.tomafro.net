import Head from "next/head"

import { ListWithIcons } from "components"
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
    <>
      <Head>
        <title>Links</title>
      </Head>
      <ListWithIcons>
        { items.map(listItem) }
      </ListWithIcons>
    </>
  )
}

export async function getStaticProps() {
  return { props: { paths: require("data").linkPaths() } }
}
