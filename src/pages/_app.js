import "assets/css/style.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faMusic, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faMusic, faBook, faQuoteLeft, faGithubSquare)

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
