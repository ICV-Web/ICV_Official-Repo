import React from 'react'
import {graphql,Link } from "gatsby"
import * as propTypes from "prop-types"
import {Container,Row,Col} from "react-bootstrap"
import Fade from 'react-reveal/Fade';
import loadable from '@loadable/component'


// Import the new rendering and the render node definitions
import { renderRichText } from "gatsby-source-contentful/rich-text"
import corebannerimg from '../images/banner-page.jpg'

const Layout = loadable(() => import('../components/layout'))



  function PageTemplate({data}) {
    
    const {content} = data.contentfulOurCorePage
    const banner = data.allContentfulOurCorePage.nodes[0].ourCoreBanner.fluid.src
    
    return (
      <Layout>

          <div className="section banner-page imprint about" style={{ backgroundImage:   `url(${banner})`  }}>
            <div className="container"><div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="title-page"> Our Core</div>
                  <ol className="breadcrumb">
                    <li><Link to="/">Home /  &nbsp; </Link></li>
                      <li className="active"> Our Core</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="section why">

            <Container className="padding-40">
        
              <Row>

                <Col sm={12} md={12}>
                  <Fade left>
                  <div className="box-partner">

                    <div className="box-info">

                      {content && renderRichText(content)}

                   </div>

                  </div>
                  </Fade>
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
  