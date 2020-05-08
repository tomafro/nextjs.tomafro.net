import Layout from "components/layout"
import { Project } from "components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class Projects extends React.Component {
  get projects() {
    return this.props.paths.map(path => require("projects/" + path))
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
    if (project.default.isMDXComponent) {
      const MDX = project.default
      const metadata = project.metadata || {}
      console.log(metadata.url)
      return (
        <li key={metadata.url} >
          <span className="fa-li"><FontAwesomeIcon icon={faCodeBranch} /></span>
          <Project title={metadata.title} url={metadata.url}>
            <MDX />
          </Project>
        </li>
      )
    }
    else {
      return (
        <li key={project.default.props.url}>
          <span className="fa-li"><FontAwesomeIcon icon={faCodeBranch} /></span>
          { project.default }
        </li>
      )
    }
  }
}

export async function getStaticProps() {
  const loader = await import("support/loader")
  const paths = await loader.findPaths("projects")
  return { props: { paths: paths.sort() } }
}

export default Projects
