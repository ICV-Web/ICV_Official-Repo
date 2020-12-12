import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Ecoprojects = () => {
  const fetcheco = useStaticQuery(graphql`
    {
      allContentfulProjects(filter: {slug: {eq: "eco"}}) {
        nodes {
          projectTitle
          projectSubtitle
          projectImage {
            fluid {
              src
            }
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(fetcheco, null, 4)}</pre>
}

export default Ecoprojects

