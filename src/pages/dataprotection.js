import React from 'react'
import loadable from '@loadable/component'
import {Link } from "gatsby"
import {Container,Row,Col} from "react-bootstrap"
import { renderRichText } from "gatsby-source-contentful/rich-text"
const Layout = loadable(() => import('../components/layout'))


const dataprotection = ({ data }) => {

    const {desc} = data.contentfulDataProtection;
    const dataPbanner = data.contentfulDataProtection.bannerImg.fluid.src;

    return (
        <>
          <Layout>
               <div className="section banner-page imprint about" style={{ backgroundImage:   `url(${dataPbanner})`  }}>
                    <Container>
                        <Row>
                            <Col sm={12} md={12} >
                                <div className="title-page">Data Protection</div>
                                <ol className="breadcrumb">
                                    <li><Link to="/">Home /   </Link></li>
                                    <li className="active">Data Protection</li>
                                </ol>
                            </Col>
                        </Row>
                    </Container>
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

export default dataprotection
export const query = graphql`
  {
    contentfulDataProtection {
      desc {
        raw
      }
      bannerImg {
        fluid (maxWidth:1356,maxHeight:275,quality: 100){
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`