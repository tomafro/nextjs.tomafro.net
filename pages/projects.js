import { Layout, Project } from "components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export * from "page/config"

function renderProject(project) {
  return (
    <li key={project.url} >
      <span className="fa-li"><FontAwesomeIcon icon="code-branch" /></span>
      <Project {...project} />
    </li>
  )
}

export default ({ paths }) => {
  const projects = require("data").load(paths)
  return (
    <Layout title="Projects">
      <h1>Recent Projects</h1>
      <ol className="links with-icons">
        {projects.map(renderProject)}
      </ol>
    </Layout>
  )
}

export async function getStaticProps() {
  return { props: { paths: require("data").projectPaths() } }
}
