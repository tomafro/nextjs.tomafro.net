import Layout from "components/layout"

export default () => (
  "Hello"
)

export async function getStaticProps() {
  return { props: {} }
}

export async function getStaticPaths() {
  console.log(process.cwd())
  console.log(process.cwd() + "/public/tom.ical")
  const fs = require('fs');
  fs.writeFile(process.cwd() + "/public/tom.ical", "Hello There", () => {})

  return { paths: [], fallback: false }
}
