import Highlight, { defaultProps, Prism } from 'prism-react-renderer'

(typeof global !== "undefined" ? global : window).Prism = Prism

require("prismjs/components/prism-ruby")
require("prismjs/components/prism-docker")

function isBlank(line) {
  return (line.length == 1 && line[0].empty)
}

function filenameLine(filename) {
  if (filename) {
    return <span className="filename-line">{filename}</span>
  }
}

function codeLine(line, lineProps, getTokenProps) {
  const { style, ...props } = lineProps

  if (isBlank(line)) {
    return (
      <span {...props}><br/></span>
    )
  }
  else {
    return (
      <span {...props}>
        {line.map((token, key) => codeToken(getTokenProps({ token, key })))}
      </span>
    )
  }
}

function codeToken(tokenProps) {
  const { style, ...props } = tokenProps
  return (
    <span {...props} />
  )
}

function classNameToLanguage(className) {
  if (className) {
    return className.substring(9)
  }
}

export const code = (props) => {
  const { className, filename, lineNumbers, children } = props
  const language = classNameToLanguage(className)

  return (
    <Highlight {...defaultProps} code={children.trimEnd()} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <code className={className} language={language}>
          {filenameLine(filename)}
          {tokens.map((line, i) => codeLine(line, getLineProps({ line, key: i }), getTokenProps))}
        </code>
      )}
    </Highlight>
  )
}
