import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { Link,useStaticQuery } from "gatsby"



const PageBanner = () => {

const data = useStaticQuery(graphql`
    {
      allContentfulContactUsPage {
        nodes {
          bannerImg {
            fluid(maxWidth:1356, maxHeight: 275,quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  
    return (
        <>
        <div className="section banner-page about" style={{ backgroundSize: '100% 100%', backgroundImage:   `url(${data.allContentfulContactUsPage.nodes[0].bannerImg.fluid.src})`  }}>
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="title-page">Contact Us</div>
                        <ol className="breadcrumb">
                            <li><Link to="#">Contact/</Link></li>
                            <li className="active">Contact Us</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default PageBanner