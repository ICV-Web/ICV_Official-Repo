import React from 'react'
import {graphql,Link } from "gatsby"
import * as propTypes from "prop-types"
import {Container,Row,Col} from "react-bootstrap"
import Fade from 'react-reveal/Fade';
import loadable from '@loadable/component'
import ReadMoreText from "../components/ReadMoreText.js"


// Import the new rendering and the render node definitions
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Layout = loadable(() => import('../components/layout'))



  function PageTemplate({data}) {
    
    const { allContentfulOurCorePageContent: {nodes: getallcores} } = data;
    const banner = data.allContentfulOurCorePage.nodes[0].ourCoreBanner.fluid.src
    
    console.log(getallcores)
    return (
      <>
      <Layout>

          <div className="section banner-page imprint about" style={{ backgroundSize: '100% 100%',backgroundImage:   `url(${banner})`  }}>
            <div className="container"><div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="title-page"> Discover Us</div>
                  <ol className="breadcrumb">
                    <li><Link to="/">Home /  &nbsp; </Link></li>
                      <li className="active"> Discover Us</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="section why">
           <Container>
               <Row>
                   <Col md={12} sm={12}>
                        <Fade left>
                        <div className="content">
                              <p>
                              {data.allContentfulOurCorePage.nodes[0].desc1.desc1}
                              </p>
                             
                        </div>
                        </Fade>
                   </Col>

             </Row>
            </Container>
          </div>
          {getallcores.map((core) => {
          return(
            <>
          {/*<div className="section why">

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
          </div>*/}
                   
          <section className={ `services banner-page  b1-segment sz-bg bg-fx ${core.textColor} `  } >
            <Fade bottom>   
              <Container fluid className="services-description" /*style={{ backgroundImage:`url(${core.imgDesk.fluid.src})`}}*/>
              
                
                  {core.addClassTestLefttestRight == 'test-right' && (
                    <Row>
                      <Col md={6} style={{paddingLeft: '0px'}}>
                        <img src={core.imgDesk.fluid.src} style={{height: '380px'}}/>
                      </Col>
                      <Col md={6}>
                        <div className="description-wrapper">
                            <h3>{core.coreTitle}</h3>
                            <p>{core.coreDescription.coreDescription}</p>      
                        </div>
                      </Col>
                    </Row>
                  )}
                
                {core.addClassTestLefttestRight == 'test-left' && (
                    <Row>                     
                      <Col md={6}>
                        <div className="description-wrapper">
                            <h3>{core.coreTitle}</h3>
                            <p>{core.coreDescription.coreDescription}</p>      
                        </div>
                      </Col>
                      <Col md={6} style={{paddingRight: '0px'}}>
                        <img src={core.imgDesk.fluid.src} style={{height: '380px'}}/>
                      </Col>
                    </Row>
                  )}
                
                </Container>
            </Fade>
         </section>
      
      
      <section className={ `services banner-page b2-segment`  }>
          <Fade bottom>
            <Container>
                  <Row>
                    <Col md={12}>
                        <div className="description-wrapper">
                            <h3>{core.coreTitle}</h3>
                            <p>{core.coreDescription.coreDescription}</p>
                     <img src={core.imgMob.fluid.src}/>
                        </div>
                    </Col>
                  </Row>
              </Container>
            </Fade>
         </section>
          </>
          )
        })}
      </Layout>
      </>
    )
  }
  PageTemplate.propTypes = {
    data: propTypes.object.isRequired,
  }
  export default PageTemplate
  export const pageQuery = graphql`
    query pageQuery{
      allContentfulOurCorePageContent (sort: { fields:sortingOrder, order: ASC }){
        nodes {
          addClassTestLefttestRight
          coreDescription {
            coreDescription
          }
          textColor 
          coreTitle
          imgDesk {
            fluid(quality: 100)  {
              ...GatsbyContentfulFluid
            }
          }
          imgMob {
            fluid {
              src
            }
          }
        }
      }
      allContentfulOurCorePage {
        nodes {
          ourCoreBanner {
            fluid(maxWidth:1356, maxHeight: 275,quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          desc1 {
            desc1
          }
        }
      }
    }
  `
  