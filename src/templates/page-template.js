import React from "react"
import loadable from "@loadable/component"
import { Container, Row, Col } from "react-bootstrap"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"

const Layout = loadable(() => import("../components/layout"))

const pageTemplate = ({ data }) => {
  
  const { description } = data.contentfulPageTemplate
  
  if (data.contentfulPageTemplate.displayFeaturedImage === true) {
    return (
      <>
        <Layout>
          <div
            className="section banner-page imprint about"
            style={{
              backgroundImage: `url(${data.contentfulPageTemplate.bannerImage.fluid.src})`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <div className="body blog-main">
                    <div className="title">
                      <h1 title="">{data.contentfulPageTemplate.title}</h1>
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
                        <img
                          src={
                            data.contentfulPageTemplate.featuredImage.fluid.src
                          }
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                      <div className="pageText">
                        {description && renderRichText(description)}
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
  } else {
    return (
      <>
        <Layout>
          <div
            className="section banner-page imprint about"
            style={{
              backgroundImage: `url(${data.contentfulPageTemplate.bannerImage.fluid.src})`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <div className="body blog-main">
                    <div className="title">
                      <h1 title="">{data.contentfulPageTemplate.title}</h1>
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
                      <div className="box-news-1 blog-img disTemplate">
                        <img
                          src={
                            data.contentfulPageTemplate.featuredImage.fluid.src
                          }
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                      <div className="pageText">
                        {description && renderRichText(description)}
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
}

export const query = graphql`
  query queryAndQuery($slug: String) {
    contentfulPageTemplate(slug: { eq: $slug }) {
      title
      displayFeaturedImage
      featuredImage {
        fluid(maxWidth: 1110, maxHeight: 500, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      description {
        raw
      }
      bannerImage {
        fluid(maxWidth: 1356, maxHeight: 275, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default pageTemplate
