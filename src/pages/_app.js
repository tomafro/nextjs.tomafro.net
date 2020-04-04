import "assets/css/style.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

library.add(faMusic)

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
