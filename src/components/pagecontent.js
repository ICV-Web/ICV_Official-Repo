import React from 'react'
import {Container,Row,Col,Form, Button} from "react-bootstrap"
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelope } from "react-icons/fa";
import { useStaticQuery, graphql , Link} from "gatsby"
import Fade from 'react-reveal/Fade';




const Pagecontent = () => {
    const contentdata = useStaticQuery(graphql`
    {
      allContentfulContact {
        nodes {
          contentDesc {
            contentDesc
          }
        }
      }
    }
  `)
   

    return (
        <>
        <div className="section contact">
           <Container>
               <Row>
                    <Col sm={8} md={8}>
                        <Fade left>
                        <div className="content">
                                <p className="section-heading-3">{contentdata.allContentfulContact.nodes[0].contentDesc.contentDesc}</p>
                                <div className="margin-bottom-30"></div>
                                <h3 className="section-heading-2">
                                    Contact Details
                                </h3>
                                <Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
                                    <Form.Group>
                                        <Form.Control id="p_name" type="text" placeholder="Full Name..." required="" />
                                        
                                        <div className="help-block with-errors"></div>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control id="p_email" type="email" placeholder="Enter Email Address..." required="" />
                                        
                                        <div className="help-block with-errors"></div>
                                    </Form.Group>

                                    {/*<Form.Group>
                                        <Form.Control id="p_subject" type="text" placeholder="Subject..." />
                                        
                                        <div className="help-block with-errors"></div>
                                    </Form.Group>*/}

                                    <Form.Group>
                                        <textarea
                                            className="form-control"
                                            id="p_message"
                                            rows="16"
                                            placeholder="Write message"
                                            />
                                        <div className="help-block with-errors"></div>
                                    </Form.Group>

                                    <Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary disabled">
                                        Submit
                                        </Button>
                                    </Form.Group>
                                </Form>
                                <div className="margin-bottom-50"></div>
                                <p><em>Note: Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em></p>
                        </div>   
                        </Fade>                     
                   </Col>
                   <Col sm={4} md={4}>
                       <Fade right>
                    <div class="widget download">
                            <Link to="#" class="btn btn-secondary btn-block btn-sidebar"><span class="fa  fa-file-pdf-o"></span> Company Brochure</Link>
                    </div>
                    </Fade>
                    <Fade top>
                    <div class="widget contact-info-sidebar">
                            <div class="widget-title">
                                Contact Info
                            </div>
                            <ul class="list-info">
                                <li>
                                    <h4>Pakistan</h4>
                                </li>
                                <li>
                                    <div class="info-icon">
                                        <FaMapMarkerAlt/>
                                    </div>
                                    <div class="info-text">Suite 203, 59/3<br/>
                                        Marium Complex, Bahadurabad</div> 
                                </li>
                                <li>
                                    <div class="info-icon">
                                        <FaPhoneAlt/>
                                    </div>
                                    <div class="info-text">(+92) 21 34144447</div>
                                </li>
                                <li>
                                    <div class="info-icon">
                                        <FaEnvelope/>
                                    </div>
                                    <div class="info-text">info@icvglobal.com</div>
                                </li>
                            </ul>
                            <ul class="list-info">
                                <li>
                                    <h4 >Germany</h4>
                                </li>
                                <li>
                                    <div class="info-icon">
                                        <FaMapMarkerAlt/>
                                    </div>
                                    <div class="info-text">Suite 203, 59/3<br/>
                                        Marium Complex, Bahadurabad</div> 
                                </li>
                                <li>
                                    <div class="info-icon">
                                       <FaPhoneAlt/>
                                    </div>
                                    <div class="info-text">(+92) 21 34144447</div>
                                </li>
                                <li>
                                    <div class="info-icon">
                                        <FaEnvelope/>
                                    </div>
                                    <div class="info-text">info@icvglobal.com</div>
                                </li>
                            </ul>
                            <ul class="list-info">
                                <li>
                                    <h4>UAE</h4>
                                </li>
                                <li>
                                    <div class="info-icon">
                                        <FaMapMarkerAlt/>
                                    </div>
                                    <div class="info-text">Suite 203, 59/3<br/>
                                        Marium Complex, Bahadurabad</div> 
                                </li>
                                <li>
                                    <div class="info-icon">
                                        <FaPhoneAlt/>
                                    </div>
                                    <div class="info-text">(+92) 21 34144447</div>
                                </li>
                                <li>
                                    <div class="info-icon">
                                        <FaEnvelope/>
                                    </div>
                                    <div class="info-text">info@icvglobal.com</div>
                                </li>
                            </ul>
                        </div> 
                        </Fade>
                   </Col>
               </Row>
            </Container>
	    </div>
        </>
    )
}

export default Pagecontent