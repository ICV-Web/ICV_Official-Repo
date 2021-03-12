import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel, Container , Row , Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import { nanoid } from 'nanoid'
const Testimonials = () => {


const alltestimonials = useStaticQuery(graphql`
    {
      allContentfulHomePageTestimonialSection {
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

const { allContentfulHomePageTestimonialSection: {nodes: testimonial}, } =  alltestimonials

    return (
        <>
        <div className="section testimony bglight">
            <Container>
                <Fade bottom>
                <Row>

                    <Col sm={12} md={{span: 12}}>


                            {testimonial.map((testimony)=> {

                                return(

                                        <div className="testimonial-3" key={nanoid()}>
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
                                )

                            })}

                                

                    </Col>
                
                </Row>
                </Fade>
            </Container>
        </div>
        </>
    )
}

export default Testimonials
