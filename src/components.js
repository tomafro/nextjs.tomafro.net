import Image from "components/image"
import Project from "components/project"

const Code = ({ style, children }) => {
  return (
    <>
      <pre><code>{children}</code></pre>
    </>
  )
}


export { Project, Image, Code }
