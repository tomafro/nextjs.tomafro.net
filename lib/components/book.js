const Book = ({title, author, url, children}) => {
  return (
    <>
      <figure>
        { children }
        <figcaption><a href={ url }>{ title }</a></figcaption>
      </figure>
    </>
  )
}

Book.defaultProps = {
  icon: "book"
}

export default Book
