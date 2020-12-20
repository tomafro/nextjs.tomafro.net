
import { FontAwesomeIcon } from "@tomafro/react-fontawesome"

export * from "components/image"
export * from "components/project"
export * from "components/layout"
export * from "components/quote"

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


export { ListWithIcons }
