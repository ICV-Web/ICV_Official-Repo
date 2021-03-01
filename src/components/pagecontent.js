import React, { useState } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import Fade from "react-reveal/Fade"

const Pagecontent = () => {
  const contentdata = useStaticQuery(graphql`
    {
      allContentfulContactUsPage {
        nodes {
          contentDesc {
            contentDesc
          }
        }
      }
      allContentfulContactUsInformation {
        nodes {
          companyBrochure {
            file {
              url
            }
          }
          address1
          address2
          address3
          country1
          country2
          country3
          mail1
          mail2
          mail3
          phone1
          phone2
          phone3
        }
      }
    }
  `)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    subject: ""
  })
  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact v2", ...formState }),
    })
      .then(() => navigate("/validation"))
      .catch(error => console.log(error))

    e.preventDefault()
  }
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const linkpdf = contentdata.allContentfulContactUsInformation.nodes[0].companyBrochure.file.url;
  return (
    <>
      <div className="section contact">
        <Container>
          <Row>
            <Col sm={12} md={8}>
              <Fade left>
                <div className="content">
                  <p className="section-heading-3">
                    {
                      contentdata.allContentfulContactUsPage.nodes[0].contentDesc
                        .contentDesc
                    }
                  </p>
                  <div className="margin-bottom-30"></div>
                </div>
              </Fade>
            </Col>
            <Col sm={12} md={4}>
              <Fade right>
                <div class="widget download">
                  <Link
                    target="_blank"
                    to={linkpdf}
                    class="btn btn-secondary btn-block btn-sidebar"
                  >
                    <span class="fa  fa-file-pdf-o"></span> Company Brochure
                  </Link>
                </div>
              </Fade>
            </Col>
            <Col sm={12} md={8}>
              <Fade left>
                <div className="content">
                  <h3 className="section-heading-2">Contact Details</h3>
                  <Form
                    action="#"
                    class="form-contact"
                    id="contactForm"
                    data-toggle="validator"
                    noValidate="true"
                    onSubmit={handleSubmit}
                    name="contact v2"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="contact v2" />
                    <Form.Group>
                      <Form.Control
                        id="p_name"
                        name="name"
                        type="text"
                        placeholder="Full Name..."
                        required=""
                        onChange={handleChange}
                        value={formState.name}
                        required
                      />
      
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        id="p_email"
                        name="email"
                        type="email"
                        placeholder="Enter Email Address..."
                        required=""
                        onChange={handleChange}
                        value={formState.email}
                        required
                      />
      
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        id="p_phone"
                        name="phone"
                        type="number"
                        placeholder="Enter Your Phone Number..."
                        required=""
                        onChange={handleChange}
                        value={formState.phone}
                        required
                      />
      
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        id="p_subject"
                        name="subject"
                        type="text"
                        placeholder="Enter Subject..."
                        required=""
                        onChange={handleChange}
                        value={formState.subject}
                        required
                      />
                      
                    </Form.Group>
                    <Form.Group>
                      <textarea
                        className="form-control"
                        id="p_message"
                        rows="11"
                        placeholder="Write message"
                        name="message"
                        onChange={handleChange}
                        value={formState.message}
                      />
      
                    </Form.Group>
                    <Form.Group>
                      <div id="success"></div>
                      <div className="help-block with-errors" style={{display:'none'}}>Submission Failed</div>
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn btn-secondary disabled"
                      >
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
                <div className="widget contact-info-sidebar contact-resp">
                  <div className="cont-mob">
                    <div className="widget-title title-change">
                      Contact Info
                    </div>
                    <ul className="list-info list-change">
                      <li>
                        <h4>
                          {
                            contentdata.allContentfulContactUsInformation.nodes[0]
                              .country1
                          }
                        </h4>
                      </li>
                      <li>
                        <div className="info-icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="info-text">
                          {
                            contentdata.allContentfulContactUsInformation.nodes[0]
                              .address1
                          }
                        </div>
                      </li>
                      <li>
                        <div className="info-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="info-text">
                          {contentdata.allContentfulContactUsInformation.nodes[0].phone1}
                        </div>
                      </li>
                      <li>
                        <div className="info-icon">
                          <FaEnvelope />
                        </div>
                        <div className="info-text">
                          {contentdata.allContentfulContactUsInformation.nodes[0].mail1}
                        </div>
                      </li>
                    </ul>
                    <ul className="list-info list-change mar-list">
                      <li>
                        <h4>
                          {
                            contentdata.allContentfulContactUsInformation.nodes[0]
                              .country2
                          }
                        </h4>
                      </li>
                      <li>
                        <div className="info-icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="info-text">
                          {
                            contentdata.allContentfulContactUsInformation.nodes[0]
                              .address2
                          }
                        </div>
                      </li>
                      <li>
                        <div className="info-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="info-text">
                          {contentdata.allContentfulContactUsInformation.nodes[0].phone2}
                        </div>
                      </li>
                      <li>
                        <div className="info-icon">
                          <FaEnvelope />
                        </div>
                        <div className="info-text">
                          {contentdata.allContentfulContactUsInformation.nodes[0].mail2}
                        </div>
                      </li>
                    </ul>
                    <ul className="list-info list-change mar-list">
                      <li>
                        <h4>
                          {
                            contentdata.allContentfulContactUsInformation.nodes[0]
                              .country3
                          }
                        </h4>
                      </li>
                      <li>
                        <div className="info-icon">
                          <FaMapMarkerAlt />
                        </div>
                        <div className="info-text">
                          {
                            contentdata.allContentfulContactUsInformation.nodes[0]
                              .address3
                          }
                        </div>
                      </li>
                      <li>
                        <div className="info-icon">
                          <FaPhoneAlt />
                        </div>
                        <div className="info-text">
                          {contentdata.allContentfulContactUsInformation.nodes[0].phone3}
                        </div>
                      </li>
                      <li>
                        <div className="info-icon">
                          <FaEnvelope />
                        </div>
                        <div className="info-text">
                          {contentdata.allContentfulContactUsInformation.nodes[0].mail3}
                        </div>
                      </li>
                    </ul>
                  </div>
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
