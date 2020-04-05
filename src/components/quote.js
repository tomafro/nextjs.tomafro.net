const Quote = ({children}) => {
  return (
    <blockquote className="quote">
      {children}
    </blockquote>
  )
}

Quote.defaultProps = {
  icon: "quote-left"
}

export default Quote
