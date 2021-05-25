import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

import {Container, Row, Col} from "react-bootstrap"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com'

const BlogNewsLetter = () => {
  
  const sendEmails = () => { 

    var templateParams = {
    
};

    // fetch("https://intelygic.com/development/ignite-fitness/api/web/v1/user/test", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   //body: encode({ "form-name": "contact v2", ...formState2 }),
    // })
    //   //.then(() => navigate("/validation"))
    //   .catch(error => console.log(error))

    emailjs.send('service_s17rbh6', 'template_fzjx6ge', templateParams, 'user_25Y1NrEQ6qP3oZDPXy4Qt')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }
  
  useEffect(() => {
    sendEmails();
  }, []);

    return (
      <Layout>
    <Container>
    <Fade left>
        <Row>
            <Col md={12} sm={12}>
                <div className="validationP">
                    <h1>Your Form Has Been Submitted Successfully</h1>
                    <Link to="/" className="btn btn-primary btn-c" title="LEARN MORE">Go Back to Home Page</Link> 
                </div>
            </Col>
        </Row>
        </Fade>
    </Container>
    
  </Layout>
    )
    }

export default BlogNewsLetter