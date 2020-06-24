import Head from "next/head"

import { Project, ListWithIcons } from "components"

export * from "page/config"

function projectItem({content, url, ...metadata}) {
  return (
    <ListWithIcons.Item key={url} icon="code-branch">
      <Project url={url} {...metadata}>{ content }</Project>
    </ListWithIcons.Item>
  )
}

export default function Projects({ paths }) {
  const projects = require("data").load(paths)
  return (
    <>
    <Head>
      <title>Projects</title>
    </Head>
    <h1>Recent Projects</h1>
    <ListWithIcons>
      { projects.map(projectItem) }
    </ListWithIcons>
    </>
  )
}

export async function getStaticProps() {
  return { props: { paths: require("data").projectPaths() } }
}
