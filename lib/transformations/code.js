import Highlight, { defaultProps } from 'prism-react-renderer'

function codeLine(line, lineProps, getTokenProps) {
  const { style, ...props } = lineProps
  return (
    <span {...props}>
      {line.map((token, key) => codeToken(getTokenProps({ token, key })))}
    </span>
  )
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
  const { className, children } = props
  const language = classNameToLanguage(className)

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <code className={className} language={language}>{tokens.map((line, i) => codeLine(line, getLineProps({ line, key: i }), getTokenProps))}</code>
      )}
    </Highlight>
  )
}
