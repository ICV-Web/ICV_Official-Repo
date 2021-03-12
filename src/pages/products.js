import React from 'react'
import loadable from '@loadable/component'
import {Container, Row, Col, button} from "react-bootstrap"
import {Link} from 'gatsby'
import Fade from 'react-reveal/Fade'
const Layout = loadable(() => import('../components/layout'))




const products = ({data}) => {
    

    const {allContentfulProductPageContentHomePageProductSection:{nodes: allprojects},} = data

    const getbannerimage = data.allContentfulProductPage.nodes[0].bannerImage.fluid.src
    const headingpdf = data.contentfulDownloadPdfProduct.requestPdfHeading.requestPdfHeading
    return (

        <>
            <Layout>
                <div className="section banner-page about" style={{  backgroundImage:   `url(${getbannerimage})`   }}>
                    <Container>
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="title-page">Products</div>
                                <ol className="breadcrumb">
                                    <li><Link to="/">Home/</Link></li>
                                    <li className="active">Products</li>
                                </ol>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section why">
                  <Container>
                    <Row>
                        <Col md={12} sm={12}>
                            <Fade left>
                            <div className="content">
                                  <p>
                                  {data.allContentfulProductPage.nodes[0].desc1.desc1}
                                  </p>
                                  
                            </div>
                            </Fade>
                        </Col>
                    </Row>
                  </Container>
                </div>
                
                {allprojects.map((projects) => {

                    return(
                      <>
                        
                            <section className={ `productBg services banner-page about  b1-segment bg-fx sz-bg  ${projects.textColor} ${projects.addClassTestLefttestRight}`  } style={{ backgroundImage:   `url(${projects.imgDesk.fluid.src})`  }}>
                            <Fade bottom>  
                            <Container>
                                    <Row>
                                    <Col md={12}>
                                        <div className="description-wrapper">
                                            <h3>{projects.projectTitle}</h3>
                                            <p>{projects.description.description}</p>
                                        </div>
                                    </Col>
                                    </Row>
                                </Container>
                                </Fade>
                            </section>
                         

                        
                         <section className="services banner-page about b2-segment">
                         <Fade bottom>
                             <Container>
                                 <Row>
                                 <Col md={12}>
                                     <div className="description-wrapper">
                                         <h3>{projects.projectTitle}</h3>
                                         <p>{projects.description.description}</p>
                                         <img src={projects.imgMob.fluid.src}/>
                                     </div>
                                 </Col>
                                 </Row>
                             </Container>
                             </Fade>
                         </section>
                     
                      </>
                    )

                })}
                <Fade bottom>
                  <section className="request-wrapper">
                      <Container>
                          <Row>
                            <Col md={12}>
                              <h3>{headingpdf}</h3>
                              <Link  target="_blank" to="/downloads" class="btn btn-danger resp-btn">Download PDF</Link>
                              <Link  target="_blank" to="/contact" class="btn btn-danger resp-btn">Request PDF</Link>
                            </Col>
                          </Row>
                      </Container>
                  </section>
                </Fade>
            </Layout>
        </>

    )
}

export const query = graphql`
  {
    allContentfulProductPageContentHomePageProductSection(sort: {fields: sortingOrder, order: ASC}) {
    nodes {
      textColor
      addClassTestLefttestRight
      imgDesk {
        fluid(maxWidth:1356, maxHeight: 275,quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      imgMob {
        fluid {
          src
        }
      }
      description {
        description
      }
      projectTitle
    }
  }
  contentfulDownloadPdfProduct {
      requestPdfHeading {
        requestPdfHeading
      }
    }

    allContentfulProductPage {
      nodes {
        bannerImage {
          fluid(maxWidth:1356, maxHeight: 275,quality: 100)  {
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

export default products
