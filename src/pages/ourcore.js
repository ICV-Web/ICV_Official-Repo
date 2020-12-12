import React from "react"
import { graphql } from "gatsby"

const OurCorePage = ({ data }) => {


  const richText = JSON.parse(data.allContentfulOurCorePage.nodes[0].content.raw)

  return(

    <>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <p>{richText}</p>
    </>
  )

}

export const query = graphql`
  {
    allContentfulOurCorePage {
      nodes {
        content {
          raw
        }
      }
    }
  }
`




export default OurCorePage