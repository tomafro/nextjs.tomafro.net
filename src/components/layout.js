import Head from "next/head"
import Link from "next/link"

export default ({children, title}) => (
  <>
    <Head>
      <meta name="viewport" content="width=520"></meta>
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
          <li><a href="https://twitter.com/tomafro"><i className="fab fa-twitter-square"></i></a></li>
          <li><a href="https://github.com/tomafro"><i className="fab fa-github-square"></i></a></li>
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
