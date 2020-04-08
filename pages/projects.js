import Layout from "components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class Projects extends React.Component {
  get projects() {
    return this.props.paths.map(path => require("../lib/projects/" + path).default)
  }

  render() {
    return (
      <Layout title="Projects">
        <h1>Recent Projects</h1>
        <ol className="links with-icons">
          {this.projects.map(this.renderProject)}
        </ol>
      </Layout>
    )
  }

  renderProject(project) {
    return (
      <li key={project.props.url}>
        <span className="fa-li"><FontAwesomeIcon icon={faCodeBranch} /></span>
        { project }
      </li>
    )
  }
}

export async function getStaticProps() {
  const loader = await import("support/loader")
  const paths = await loader.findPaths("/lib/projects")
  return { props: {paths: paths.sort() } }
}

export default Projects
