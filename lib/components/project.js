export const Project = ({url, title, children}) => {
  return (
    <>
      <h2><a href={url}>{title}</a></h2>
      { children }
    </>
  )
}


export default Project

Project.defaultProps = {
  icon: "github-square"
}
