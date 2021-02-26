import React from 'react'
import loadable from '@loadable/component'
import { Container, Row, Col } from 'react-bootstrap'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {graphql } from "gatsby"
import * as propTypes from "prop-types"
import Fade from 'react-reveal/Fade';

const Layout = loadable(() => import('../components/layout'))

const blogTemplate = ({data}) => {
    
    const {description1} = data.contentfulBlogs


    return (
        <>
        <Layout>
            <div className="section banner-page imprint about" style={{ backgroundImage:   `url(${data.contentfulBlogs.bannerImg.fluid.src})`  }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                           <div className="body blog-main">
                                <div className="title">
                                    <h1 title="">{data.contentfulBlogs.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <Fade left>
                        <div className="box-partner">
                            <div className="box-info">
                                <div className="box-news-1 blog-img">
                                    <img src={data.contentfulBlogs.featuredImage.fluid.src} alt="" className="img-responsive"/>  
                                </div>
                                {description1 && renderRichText(description1)}
                                <div className="box-news-1 blog-img">
                                    <img src={data.contentfulBlogs.footerImg.fluid.src} alt="" className="img-responsive"/>  
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </Layout>    
       </>
    )
}


export const query = graphql`
    query query ($slug: String) {
       contentfulBlogs(slug: {eq: $slug}) {
            title
            featuredImage {
                fluid(maxWidth:1110, maxHeight: 500,quality: 100)  {
                    ...GatsbyContentfulFluid
                }
            }
            description1 {
                raw
            }
            footerImg {
                fluid(maxWidth:1110, maxHeight: 500,quality: 100)  {
                    ...GatsbyContentfulFluid
                }
            }
             bannerImg {
                fluid(maxWidth:1356, maxHeight: 275,quality: 100) {
                    ...GatsbyContentfulFluid
                }
            }
        }
        
    }
  `

  export default blogTemplate