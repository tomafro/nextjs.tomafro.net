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

export default Quote
