import "../assets/css/style.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

import Layout from "components/layout"

export default ({ Component, pageProps }) => {
  return <Layout><Component {...pageProps} /></Layout>
}
