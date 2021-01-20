import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { useStaticQuery, graphql, Link } from "gatsby"
import Fade from 'react-reveal/Fade';

const SegmentContent = () => {
    
    const Segmentdata = useStaticQuery(graphql`
    {
      allContentfulBusinessSegment {
        nodes {
          desc1 {
            desc1
          }
          desc2 {
            desc2
          }
          
        }
      }

      allContentfulHomeServices {
      nodes {
          description {
            description
          }

          servicesHeading
          imgDesk {
        fluid {
          src
        }
      }
      imgMob {
        fluid {
          src
        }
      }
        }
      }
      contentfulRequestPdfIdentifierBs {
        bsRequestPdf {
          bsRequestPdf
      }
  }
    }
  `)


    const { allContentfulHomeServices: {nodes: getallservices} } = Segmentdata;

    console.log(getallservices)


    return (
        <>
        <div className="section why">
           <Container>
               <Row>
                   <Col md={12} sm={12}>
                        <Fade left>
                        <div className="content">
                              <p>
                              {Segmentdata.allContentfulBusinessSegment.nodes[0].desc1.desc1}
                              </p>
                              <p>
                              {Segmentdata.allContentfulBusinessSegment.nodes[0].desc2.desc2}
                              </p>
                        </div>
                        </Fade>
                   </Col>

             </Row>
            </Container>

            {getallservices.map((service) => {

              return(

                <>
                <Fade bottom>
                   <section className="services banner-page about  b1-segment" style={{ backgroundImage:   `url(${service.imgDesk.fluid.src})` }}>
                      <Container>
                        <Row>
                          <Col md={12}>
                              <div className="description-wrapper">
                                  <h3>{service.servicesHeading}</h3>
                                  <p>{service.description.description}</p>
                                  
                              </div>
                          </Col>
                        
                        </Row>
                      </Container>
                   </section>
                </Fade>
                <Fade bottom>
                <section className="services banner-page about  b2-segment" style={{ backgroundImage:   `url(${service.imgMob.fluid.src})` }}>
                   <Container>
                     <Row>
                       <Col md={12}>
                           <div className="description-wrapper">
                               <h3>{service.servicesHeading}</h3>
                               <p>{service.description.description}</p>
                               
                           </div>
                       </Col>
                     
                     </Row>
                   </Container>
                </section>
             </Fade>
                </>

              )

            })}
            <Container>
              <Row>
                <Col md={12}>
                  <div className="request-wrapper">
                    <h1>{Segmentdata.contentfulRequestPdfIdentifierBs.bsRequestPdf.bsRequestPdf}</h1>
                    <Link  target="_blank" to="/contact" class="btn btn-danger resp-btn">Request PDF</Link>
                  </div>           
                </Col>
              </Row>
            </Container>   
        </div>    
        </>
    )
}

export default SegmentContent