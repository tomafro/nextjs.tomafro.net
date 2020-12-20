export * from "transformations/code"
export * from "transformations/picture"

import Head from "next/head"



export const title = ({children}) => {
  return (
      <Head>
        <title>{ children } - Tom Ward's Blog</title>
      </Head>
  )
}
