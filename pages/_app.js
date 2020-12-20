import "../assets/css/style.scss"
import "@tomafro/fontawesome-svg-core/styles.css"

import { library } from '@tomafro/fontawesome-svg-core'
import { fas } from '@tomafro/pro-solid-svg-icons'
import { fab } from '@tomafro/free-brands-svg-icons'

library.add(fas, fab)

import Layout from "components/layout"

export const ComponentWithLayout = ({ Component, pageProps }) => {
  return <Layout><Component {...pageProps} /></Layout>
}

export default ComponentWithLayout
