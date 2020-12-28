import React from 'react'
import loadable from '@loadable/component'
import {Link } from "gatsby"
import {Container,Row,Col} from "react-bootstrap"
import { renderRichText } from "gatsby-source-contentful/rich-text"
const Layout = loadable(() => import('../components/layout'))


const careers = ({ data }) => {
    const {desc} = data.contentfulCareer;
    const careerbanner = data.contentfulCareer.bannerImg.fluid.src;
    return (
        <>
             <Layout>
                 <div className="section banner-page imprint about" style={{ backgroundImage:    `url(${careerbanner})`  }}>
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

export default careers
export const query = graphql`
  {
    contentfulCareer {
      desc {
        raw
      }
      bannerImg {
        fluid {
          src
        }
      }
    }
  }
`