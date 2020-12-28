import React from 'react'
import loadable from '@loadable/component'
import {Link } from "gatsby"
import {Container,Row,Col} from "react-bootstrap"
import { renderRichText } from "gatsby-source-contentful/rich-text"


const Layout = loadable(() => import('../components/layout'))

const cookiepolicy = ({ data }) => {

     const {desc} = data.contentfulCookiePolicy;
     const cookiebanner = data.contentfulCookiePolicy.bannerImage.fluid.src;


    return (
        <>
            <Layout>
                 <div className="section banner-page imprint about" style={{ backgroundImage:  `url(${cookiebanner})`  }}>
                    <div className="container"><div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="title-page"> Cookie Policy</div>
                        <ol className="breadcrumb">
                            <li><Link to="/">Home /   </Link></li>
                            <li className="active">  Cookie Policy</li>
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
                                    <div className="box-info">

                                        {desc && renderRichText(desc)}

                                    </div>
  
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

             </Layout>
        </>
    )
}

export default cookiepolicy

export const query = graphql`
  {
    contentfulCookiePolicy {
      desc {
        raw
      }
      bannerImage {
        fluid {
            src
        }
      }
    }
  }
`
