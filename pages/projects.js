import { Layout, Project } from "components"

import { fragmentFor } from "fragments"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

export const config = {
  unstable_runtimeJS: false
}

class Projects extends React.Component {
  get projects() {
    return require("lib/data").load(this.props.paths)
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
    const { content, metadata } = fragmentFor(project)

    return (
      <li key={metadata.url} >
        <span className="fa-li"><FontAwesomeIcon icon={faCodeBranch} /></span>
        <Project title={metadata.title} url={metadata.url}>
          { content }
        </Project>
      </li>
    )
  }
}

export async function getStaticProps() {
  return { props: { paths: require("lib/data").projectPaths() } }
}

export default Projects
