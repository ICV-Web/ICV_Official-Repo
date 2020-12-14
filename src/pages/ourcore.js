import React from 'react'
import {useStaticQuery, graphql,Link } from "gatsby"
import * as propTypes from "prop-types"
import {Container,Row,Col} from "react-bootstrap"

// Import the new rendering and the render node definitions
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import corebannerimg from '../images/banner-page.jpg'


  function PageTemplate({data}) {
    
    const {content} = data.contentfulOurCorePage
    
    return (
      <Layout>

          <div class="section banner-page imprint about" style={{ backgroundImage:   `url(${corebannerimg})`  }}>
            <div class="container"><div class="row">
              <div class="col-sm-12 col-md-12">
                <div class="title-page"> Our Core</div>
                  <ol class="breadcrumb">
                    <li><a href="/en/">Home /  &nbsp; </a></li>
                      <li class="active"> Our Core</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="section why">

            <Container className="padding-40">
        
              <Row>

                <Col sm={12} md={12}>

                  <div className="box-partner">

                    <div className="box-info">

                      {content && renderRichText(content)}

                   </div>

                  </div>

                </Col>

              </Row>

            </Container>
          </div>
           
      </Layout>
    )
  }
  PageTemplate.propTypes = {
    data: propTypes.object.isRequired,
  }
  export default PageTemplate
  export const pageQuery = graphql`
    query pageQuery{
        contentfulOurCorePage {
            content {
              raw
            }
        }
         allContentfulOurCorePage {
        nodes {
          ourCoreBanner {
            fluid {
              src
            }
          }
        }
      }
    }
  `
  