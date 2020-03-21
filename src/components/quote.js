export const Quote = ({children}) => {
  return (
    <blockquote className="quote">
      {children}
    </blockquote>
  )
}

Quote.defaultProps = {
  icon: "fas fa-quote-left"
}

Quote.Cite = ({children}) => {
  return (
    <cite>{children}</cite>
  )
}

export default Quote
