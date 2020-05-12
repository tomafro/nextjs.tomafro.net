import { Layout, Project } from "components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export * from "page/config"

function contentFor(module) {
  if (module.default.isMDXComponent) {
    const MDX = module.default
    return (
      <>
        <MDX />
      </>
    )
  }
  else {
    return module.default
  }
}

function itemFor(module) {
  return {
    children: contentFor(module),
    ...module
  }
}

class Projects extends React.Component {
  get projects() {
    return require("data").load(this.props.paths)
  }

  render() {
    return (
      <Layout title="Projects">
        <h1>Recent Projects</h1>
        <ol className="links with-icons">
          { this.projects.map(this.renderProject) }
        </ol>
      </Layout>
    )
  }

  renderProject(project) {
    const item = itemFor(project)

    return (
      <li key={item.url} >
        <span className="fa-li"><FontAwesomeIcon icon="code-branch" /></span>
        <Project {...item}/>
      </li>
    )
  }
}

export async function getStaticProps() {
  return { props: { paths: require("data").projectPaths() } }
}

export default Projects
