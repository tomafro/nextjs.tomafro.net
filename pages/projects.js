import { Layout, Project, ListWithIcons } from "components"

export * from "page/config"

function projectItem(project) {
  return (
    <ListWithIcons.Item key={project.url} icon="code-branch">
      <Project {...project} />
    </ListWithIcons.Item>
  )
}

export default ({ paths }) => {
  const projects = require("data").load(paths)
  return (
    <Layout title="Projects">
      <h1>Recent Projects</h1>
      <ListWithIcons>
        { projects.map(projectItem) }
      </ListWithIcons>
    </Layout>
  )
}

export async function getStaticProps() {
  return { props: { paths: require("data").projectPaths() } }
}
