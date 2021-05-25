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
          
          
        }
      }

      allContentfulBusinessSegmentPageHomePageContent(sort: { fields:sortingOrder, order: ASC }) {
      nodes {
          description {
            description
          }

          servicesHeading
          addClassTestLefttestRight
          textColor
          imgDesk {
            fluid(maxWidth:1356, quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        imgMob {
          fluid {
            src
          }
        }
        }
      }
      contentfulRequestPdfTextBusinessSegment {
        bsRequestPdf {
          bsRequestPdf
      }
  }
    }
  `)


    const { allContentfulBusinessSegmentPageHomePageContent: {nodes: getallservices} } = Segmentdata;

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
                              
                        </div>
                        </Fade>
                   </Col>

             </Row>
            </Container>

            {getallservices.map((service) => {

              return(
                <>
                    
                   <section className={ `services banner-page business-segment-banners  b1-segment sz-bg bg-fx ${service.textColor} `}>
                    <Fade bottom>   
                      <Container fluid>

                      {service.addClassTestLefttestRight == 'test-right' && (
                        <Row className="description-image" style={{ backgroundPosition: 'left', paddingLeft: '0px', backgroundImage:`url(${service.imgDesk.fluid.src})`}}>
                        
                        <Col lg={{span: 8, offset: 4}} md={{span: 7, offset: 5}}>
                          <div className="description-wrapper" style={{paddingLeft: '60px'}}>
                             <h3>{service.servicesHeading}</h3>
                             <p>{service.description.description}</p>      
                          </div>
                        </Col>
                      </Row>
                      )}

                      {service.addClassTestLefttestRight == 'test-left' && (
                        <Row className="description-image" style={{ backgroundPosition: 'right', paddingLeft: '0px', backgroundImage:`url(${service.imgDesk.fluid.src})`}}>
                        
                        <Col lg={8} md={7}>
                          <div className="description-wrapper">
                             <h3>{service.servicesHeading}</h3>
                             <p>{service.description.description}</p>      
                          </div>
                        </Col>
                      </Row>
                      )}
                        
                      </Container>
                    </Fade>
                   </section>
                
                
                <section className="services banner-page about  b2-segment">
                  <Fade bottom>
                   <Container>
                     <Row>
                       <Col md={12}>
                           <div className="description-wrapper">
                               <h3>{service.servicesHeading}</h3>
                               <p>{service.description.description}</p>
                               <img src={service.imgMob.fluid.src}/>
                           </div>
                       </Col>
                     </Row>
                   </Container>
                   </Fade>
                </section>

                </>

              )

            })}
            <Container>
              <Row>
                <Col md={12}>
                  <div className="request-wrapper">
                    <h3>{Segmentdata.contentfulRequestPdfTextBusinessSegment.bsRequestPdf.bsRequestPdf}</h3>
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