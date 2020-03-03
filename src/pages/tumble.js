import Layout from "../shared/layout"
import itemFiles from "../data/tumble.json"

const items = itemFiles.map(name => {
  return require("../data/tumble/" + name).content
})

function Tumble(props) {
  return (
    <Layout>
      <ol className="links with-icons">
      {items.map(item => (
        <li key={item.props.date}>
          <span className="fa-li"><i className={item.props.icon}></i></span>
          <p>
          {item}
          </p>
        </li>
      ))}
      </ol>
    </Layout>
  )
}

export async function getStaticProps() {
  const fs = await import("fs")
  return { props: {tom: "Rocks"} }
}

export default Tumble
