import React from 'react'
import loadable from '@loadable/component'
import {Link } from "gatsby"
import {Container,Row,Col} from "react-bootstrap"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Fade from 'react-reveal/Fade';
const Layout = loadable(() => import('../components/layout'))


const careers = ({ data }) => {
    const {desc} = data.contentfulCareer;
    const careerbanner = data.contentfulCareer.bannerImg.fluid.src;
    const careertitle = data.contentfulCareer.careerTitle;
    const { allContentfulCareerDesc: {nodes: getallcareers} } = data;
    console.log(getallcareers)


    return (
        <>
             <Layout>
                 <div className="section  banner-page imprint about" style={{ backgroundImage:    `url(${careerbanner})`  }}>
                    <div className="container"><div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="title-page"> Careers</div>
                        <ol className="breadcrumb">
                            <li><Link to="/">Home /   </Link></li>
                            <li className="active"> Careers</li>
                        </ol>
                        </div>
                    </div>
                    </div>
                </div>

                <section className="career-section">
                    <Container>
                        <Row>
                            <Col md={12}>
                               <div className="main-content">
                                    <div className="box-info box-info-pad">
                                        {desc && renderRichText(desc)}
                                    </div>
                                    <h2 className="section-heading">
                                        {careertitle}
                                    </h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {getallcareers.map((care) => {

                      return(
                        <>
                          <section>
                              <Fade bottom>   
                                <Container>
                                    <div className="av-job">
                                      <Row>
                                        <Col md={6} sm={6}>
                                            <div className="t-wrapper">
                                                <h3>Position Title:</h3>
                                                <p>{care.divTitleDesc}</p>      
                                            </div>
                                        </Col>
                                        <Col md={6} sm={6}>
                                            <div className="Title-location f-r">
                                                <h5>Location: {care.location}</h5> 
                                            </div>
                                        </Col>
                                        <Col md={6} sm={6}>
                                            <div className="t-wrapper">
                                                <h3>Experience</h3>
                                                <p>{care.divExpDesc}</p>      
                                            </div>
                                        </Col>
                                        <Col md={6} sm={6}>
                                            <div className="Apply-btn f-r">
                                              <Link to={care.applyBtnLink} className="btn btn-primary btn-apply" title="LEARN MORE">{care.applyBtn}</Link>      
                                            </div>
                                        </Col>
                                      </Row>
                                    </div>  
                                </Container>
                              </Fade>
                          </section>
                        </>
                        )

                      })}
                </section>

             </Layout>
        </>
    )
}

export default careers
export const query = graphql`
  {
    contentfulCareer {
      desc {
        raw
      }
      careerTitle
      bannerImg {
        fluid(maxWidth:1356, maxHeight: 275,quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulCareerDesc {
      nodes {
        applyBtn
        applyBtnLink
        divExpDesc
        divTitleDesc
        location
      }
    }
  }
`