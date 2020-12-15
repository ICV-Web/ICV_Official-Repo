import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel, Container , Row , Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
const Testimonials = () => {


const alltestimonials = useStaticQuery(graphql`
    {
      allContentfulTestimonials {
        nodes {
          messageTitle
          userName
          userDesignation
          userDescription {
            userDescription
          }
          userSign {
            fluid {
              src
            }
          }
        }
      }
    }
`)

const { allContentfulTestimonials: {nodes: testimonial}, } =  alltestimonials

    return (
        <>
        <div class="section testimony bglight">
            <Container>
                <Fade bottom>
                <Row>

                    <Col sm={12} md={{span: 10,offset: 1}}>

                        <Carousel >

                            {testimonial.map((testimony)=> {

                                return(

                                    <Carousel.Item>
                                        <div className="testimonial-3">
                                            <div className="media">
                                          
                                            
                                            </div>
                                            <div className="body" id="msgblog-id">
                                              <div className="titleheader">{testimony.messageTitle}</div>
                                              <p>{testimony.userDescription.userDescription}</p>
                                              <img src={testimony.userSign.fluid.src}></img>
                                              <div className="title">{testimony.userName}</div>
                                              <div className="company">{testimony.userDesignation}</div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                )

                            })}

                                
                        </Carousel>

                    </Col>
                
                </Row>
                </Fade>
            </Container>
        </div>
        </>
    )
}

export default Testimonials
