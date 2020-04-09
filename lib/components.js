import Image from "components/image"
import Project from "components/project"

const Misc = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

const Code = ({ style, children }) => {
  return (
    <>
      <pre className={style}><code>{children}</code></pre>
    </>
  )
}

const Link = ({ url, title, children }) => {
  return (
    <>
      <h2><a href={url}>{title}</a></h2>
      {children}
    </>
  )
}


export { Project, Image, Code, Link, Misc }