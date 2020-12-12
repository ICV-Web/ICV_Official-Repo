import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"


const Partners = () => {

const getpartners = useStaticQuery(graphql`
    {
      allContentfulHomePagePartners {
        nodes {
          logo {
            fluid {
              src
            }
          }
        }
      }
    }
`)

const { allContentfulHomePagePartners: {nodes: logos}, } = getpartners



    return (
        <>
            <div class="section stat-client">
                    <Container>
                        
                        <Row>

                            {logos.map((logo) => {

                                return(
                            <Col sm={3} md={3}>
                                <div class="client-img">
                                    <Link to="#"><img src={logo.logo.fluid.src} alt="" class="img-responsive"/></Link>
                                </div>
                            </Col>
                                )

                            })}
                        </Row>
                    </Container>
            </div>
	
        </>
    )
}

export default Partners
