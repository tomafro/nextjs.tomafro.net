const Project = ({title, url, children}) => {
  return (
    <>
      <h2><a href={url}>{title}</a></h2>
      { children }
    </>
  )
}

Project.defaultProps = {
  icon: "github-square"
}

export default Project
