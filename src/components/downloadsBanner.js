import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"



const DownloadsBanner = () => {

   const data = useStaticQuery(graphql`
    {
      allContentfulDownloads {
        nodes {
          downloadsBanner {
            fluid(maxWidth:1600) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  
    return (
        <>
        <div className="section banner-page about" style={{ backgroundImage:   `url(${data.allContentfulDownloads.nodes[0].downloadsBanner.fluid.src})`  }}>
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="title-page">Downloads</div>
                        <ol className="breadcrumb">
                            <li><Link to="index.html">Home</Link></li>
                            <li className="active">Downloads</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default DownloadsBanner
