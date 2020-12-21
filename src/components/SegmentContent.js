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
                   <section className="services">
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
                   
                  

                  
                  
               
        </div>    
        </>
    )
}

export default SegmentContent