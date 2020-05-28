
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Highlight, { defaultProps } from 'prism-react-renderer'

export * from "components/image"
export * from "components/project"
export * from "components/layout"
export * from "components/quote"

const Misc = ({ children }) => {
  return (
    <>
      {children}
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


const ListWithIcons = ({ children }) => {
  return (
    <>
      <ol className="links with-icons">
        {children}
      </ol>
    </>
  )
}

ListWithIcons.Item = ({ icon, children }) => {
  return (
    <>
      <li>
        <span className="fa-li"><FontAwesomeIcon icon={icon} /></span>
        {children}
      </li>
    </>
  )
}


export { Link, Misc, ListWithIcons }
