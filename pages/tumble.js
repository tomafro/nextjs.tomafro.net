function Tumble({ items }) {
  return (
    <div>
    {items}
    </div>
  )
}

Tumble.getInitialProps = async ctx => {
  const items = [(await import("../content/tumble/example"))]
  console.log(items)
  return { items: items.map(i => i.default()) }
}

export default Tumble
