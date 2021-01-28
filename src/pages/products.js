import React from 'react'
import loadable from '@loadable/component'
import {Container, Row, Col, button} from "react-bootstrap"
import {Link} from 'gatsby'
import Fade from 'react-reveal/Fade'
const Layout = loadable(() => import('../components/layout'))




const products = ({data}) => {
    

    const {allContentfulProjects:{nodes: allprojects},} = data

    const getbannerimage = data.allContentfulProductsPages.nodes[0].bannerImage.fluid.src
    const linkpdf = data.contentfulRequestPdfProduct.downloadsPdf.file.url
    const headingpdf = data.contentfulRequestPdfProduct.requestPdfHeading.requestPdfHeading
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
                                  {data.allContentfulProductsPages.nodes[0].desc1.desc1}
                                  </p>
                                  <p>
                                  {data.allContentfulProductsPages.nodes[0].desc2.desc2}
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
                        
                            <section className={ `services banner-page about  b1-segment bg-fx sz-bg ${projects.addClassTestLefttestRight}`  } style={{ backgroundImage:   `url(${projects.imgDesk.fluid.src})`  }}>
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
                              <h4>{headingpdf}</h4>
                              <Link  target="_blank" to={linkpdf} class="btn btn-danger resp-btn">Download PDF</Link>
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
    allContentfulProjects {
      nodes {
        projectTitle
        description {
          description
        }
        imgMob {
          fluid {
            src
          }
        }
        imgDesk {
          fluid(maxWidth:1356, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        addClassTestLefttestRight
        
      }
    }
    contentfulRequestPdfProduct {
      downloadsPdf {
        file {
          url
        }
      }
      requestPdfHeading {
        requestPdfHeading
      }
    }

    allContentfulProductsPages {
      nodes {
        bannerImage {
          fluid(maxWidth:1356, maxHeight: 275,quality: 100)  {
            ...GatsbyContentfulFluid
          }
        }
        desc1 {
          desc1
        }
        desc2 {
          desc2
        }
      }
    }

  }
`

export default products
