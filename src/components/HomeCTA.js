import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"

import ctabannerimg from '../images/bgoverlay-2.jpg'


const HomeCTA = () => {

const getctadata = useStaticQuery(graphql`
    {
      allContentfulHomeCta {
        nodes {
          ctaHeading
          ctaDescription {
            ctaDescription
          }
          ctaText
          ctaLink
          ctaBackground {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  const { allContentfulHomeCta: {nodes: CTA}, } = getctadata

    return (
        <>
            <div className="section cta" style={{ backgroundImage:   `url(${ctabannerimg})`  }}>
                <Container>
                    
                    <Row>
                        <Col sm={12} md={12}>

                           {CTA.map((ctadata) => {

                               return(
                                     <div className="cta-info">
                                        <h3>{ctadata.ctaHeading}</h3>
                                        <p>{ctadata.ctaDescription.ctaDescription}</p>
                                        <Link to={ctadata.ctaLink} title="" className="btn btn-cta">{ctadata.ctaText}</Link>
                                    </div>
                               )
                           })} 

                           
                        </Col>
                    </Row>
                </Container>
            </div> 
        </>
    )
}

export default HomeCTA
