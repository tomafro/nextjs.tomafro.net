import Head from "next/head"
import Link from "next/link"

import { MDXProvider } from '@mdx-js/react'
import * as transformations from "transformations"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Layout = ({children, title}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=520"></meta>
        <meta name="Description" content="Tom Ward's personal blog, with projects, links, and more"/>
        <title>Tom Ward's Blog</title>
      </Head>
      <header>
        <div className="column">
          <ul className="site-links">
            <li><Link href="/">Tom Ward</Link></li>
            <li><Link href="/projects">projects</Link></li>
            <li><Link href="/links">links</Link></li>
          </ul>
          <ul className="social-links">
            <li><a href="https://twitter.com/tomafro"><FontAwesomeIcon icon={['fab', 'twitter-square']} title="My twitter account"/></a></li>
            <li><a href="https://github.com/tomafro"><FontAwesomeIcon icon={['fab', 'github-square']} title="My GitHub account"/></a></li>
          </ul>
        </div>
      </header>
      <main>
        <div className="column">
          <MDXProvider components={transformations}>
            { children }
          </MDXProvider>
        </div>
      </main>
    </>
  )
}

export default Layout
