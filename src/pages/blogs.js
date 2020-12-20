import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import Layout from '../components/layout'
import News from '../components/Blogs'
import {Link} from 'gatsby'



const blogs = () => {




    return (
        <>
            <Layout>
                <div className="section banner-page about" style={{  }}>
                    <Container>
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="title-page">News</div>
                                <ol className="breadcrumb">
                                    <li><Link to="index.html">Home</Link></li>
                                    <li className="active">News</li>
                                </ol>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <News/>
            </Layout>
        </>
    )
}

export default blogs
