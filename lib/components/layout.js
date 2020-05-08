import Head from "next/head"
import Link from "next/link"

import { faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Layout = ({children, title}) => (
  <>
    <Head>
      <meta name="viewport" content="width=520"></meta>
      <meta name="Description" content="Tom Ward's personal blog, with projects, links, and more"/>
      <link href="https://fonts.googleapis.com/css?family=Rubik:500,700%7CMerriweather%7CFira+Mono&display=swap" rel="stylesheet"/>
      <title>{title} - Tom Ward's Blog</title>
    </Head>
    <header>
      <div className="column">
        <ul className="site-links">
          <li><Link href="/"><a href="/">Tom Ward</a></Link></li>
          <li><Link href="/projects"><a href="/projects">projects</a></Link></li>
          <li><Link href="/tumble"><a href="/tumble">tumble</a></Link></li>
        </ul>
        <ul className="social-links">
          <li><a href="https://twitter.com/tomafro"><FontAwesomeIcon icon={faTwitterSquare} title="My twitter account"/></a></li>
          <li><a href="https://github.com/tomafro"><FontAwesomeIcon icon={faGithubSquare} title="My GitHub account"/></a></li>
        </ul>
      </div>
    </header>
    <main>
      <div className="column">
        {children}
      </div>
    </main>
  </>
)

export default Layout
