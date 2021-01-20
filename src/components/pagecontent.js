import React, {useState} from 'react'
import {Container,Row,Col,Form, Button} from "react-bootstrap"
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelope } from "react-icons/fa";
import { useStaticQuery, graphql , Link,navigate} from "gatsby"
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
   const [formState, setFormState] = useState({
       name: "",
       email: "",
       message:""
   })
   const handleChange=e =>{
       setFormState({
           ...formState,
           [e.target.name]:e.target.value,
       })
   }
   const handleSubmit=e =>{
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact v2", ...formState })
      })
        .then(() => navigate("/validation"))
        .catch(error => console.log(error));

      e.preventDefault();
   }
   const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
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
                        </div>
                        </Fade>
                    </Col>
                    <Col sm={4} md={4}>
                    <Fade right>
                         <div class="widget download">
                                 <Link to="#" class="btn btn-secondary btn-block btn-sidebar"><span class="fa  fa-file-pdf-o"></span> Company Brochure</Link>
                         </div>
                     </Fade>
                 </Col>
                    <Col sm={8} md={8}>
                        <Fade left>
                        <div className="content">
                                <h3 className="section-heading-2">
                                    Contact Details
                                </h3>
                                <Form action="#" class="form-contact" id="contactForm" data-toggle="validator" noValidate="true" onSubmit={handleSubmit} name="contact v2" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                    <input type="hidden" name="form-name" value="contact v2" />
                                    <Form.Group>
                                        <Form.Control id="p_name" name="name" type="text" placeholder="Full Name..." required="" onChange={handleChange} value={formState.name}/>
                                        <div className="help-block with-errors"></div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control id="p_email" name="email" type="email" placeholder="Enter Email Address..." required="" onChange={handleChange} value={formState.email}/>                                      
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
                                            rows="13"
                                            placeholder="Write message"
                                            name="message"
                                            onChange={handleChange} 
                                            value={formState.message}
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
                
                        </div>   
                        </Fade>                     
                   </Col>

                    <Col sm={4} md={4}>
                    <Fade top>
                    <div class="widget contact-info-sidebar contact-resp">
                            <div class="widget-title title-change">
                                Contact Info
                            </div>
                            <ul class="list-info list-change">
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
                            <ul class="list-info list-change mar-list">
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
                            <ul class="list-info list-change mar-list">
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