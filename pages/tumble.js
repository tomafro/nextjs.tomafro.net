function Tumble({ items }) {
  return (
    <div>
    {items}
    </div>
  )
}

const itemNames = [
  "example",
  "example-2"
]

Tumble.getInitialProps = async ctx => {
  const items = await Promise.all(itemNames.map(async name => (import(`../content/tumble/${name}`))))
  return { items: items.map(i => i.default()) }
}

export default Tumble
