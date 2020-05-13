
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

function codeLine(line, lineProps, getTokenProps) {
  const {style, ...props} = lineProps
  return (
    <div {...props}>
      { line.map((token, key) => codeToken(getTokenProps({ token, key }))) }
    </div>
  )
}

function codeToken(tokenProps) {
  const { style, ...props } = tokenProps
  return (
    <span {...props} />
  )
}

const Code = ({ language, children }) => {
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className}><code language={language}>{tokens.map((line, i) => codeLine(line, getLineProps({ line, key: i }), getTokenProps))}</code></pre>
      )}
    </Highlight>
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


export { Code, Link, Misc, ListWithIcons }
