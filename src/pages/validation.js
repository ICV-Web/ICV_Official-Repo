import React from "react"
import Layout from "../components/layout"

import {Container, Row, Col} from "react-bootstrap"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
const validation = () => (
  
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

export default validation