const Book = ({title, artist, code, children}) => {
  return (
    <>
      <figure>
        { children }
        <figcaption><a href="{ url }">{ title }</a></figcaption>
      </figure>
    </>
  )
}

Book.defaultProps = {
  icon: "fad fa-book"
}

export default Book
