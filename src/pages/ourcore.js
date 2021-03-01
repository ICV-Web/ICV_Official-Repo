import React from 'react'
import {graphql,Link } from "gatsby"
import * as propTypes from "prop-types"
import {Container,Row,Col} from "react-bootstrap"
import Fade from 'react-reveal/Fade';
import loadable from '@loadable/component'


// Import the new rendering and the render node definitions
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Layout = loadable(() => import('../components/layout'))



  function PageTemplate({data}) {
    
    const { allContentfulOurCorePageContent: {nodes: getallcores} } = data;
    const banner = data.allContentfulOurCorePage.nodes[0].ourCoreBanner.fluid.src
    
    return (
      <>
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
                   
          <section className={ `services banner-page about  b1-segment sz-bg bg-fx ${core.textColor} ${core.addClassTestLefttestRight}`  } style={{ backgroundImage:   `url(${core.imgDesk.fluid.src})` }}>
          <Fade bottom>   
            <Container>
                  <Row>
                    <Col md={12}>
                        <div className="description-wrapper">
                            <h3>{core.coreTitle}</h3>
                            <p>{core.coreDescription.coreDescription}</p>      
                        </div>
                    </Col>
                  </Row>
              </Container>
            </Fade>
         </section>
      
      
      <section className="services banner-page about  b2-segment">
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
            fluid(maxWidth:1356,quality: 100)  {
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
  