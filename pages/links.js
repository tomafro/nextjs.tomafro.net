import Head from "next/head"

import { ListWithIcons } from "components"
import { load, byDate } from "data"

export const config = {
  unstable_runtimeJS: false
}

function listItem({content, icon, path}) {
  return (
    <ListWithIcons.Item key={path} icon={icon}>
      { content }
    </ListWithIcons.Item>
  )
}

export const Page = ({ paths }) => {
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

export default Page

export async function getStaticProps() {
  return { props: { paths: require("data").linkPaths() } }
}
