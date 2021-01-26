import React from 'react'
import Layout from '../components/layout'
import {Container,Row,Col} from "react-bootstrap"
import { graphql,Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"



const imprints = ( { data } ) => {

    const {desc} = data.contentfulImprint



    return (
        <>
            <Layout>
                <div className="section banner-page about" style={{ backgroundImage:   `url(${data.contentfulImprint.banner.fluid.src})`  }}>
                    <Container>
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="title-page">Imprints</div>
                                <ol className="breadcrumb">
                                    <li><Link to="index.html">Home/</Link></li>
                                    <li className="active">Imprints</li>
                                </ol>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section why">
                    <Container>
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="box-partner">
                                    <div className="item">
                                    <div className="box-image">
                                        <div className="client-img">
                                            <img src={data.contentfulImprint.descImg.fluid.src} alt="" className="img-responsive"/>
                                        </div>
                                    </div>
                                    <div className="box-info">
                                        {desc && renderRichText(desc)}
                                    </div>
                                    </div>                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
        </>
        )
}


export const query = graphql`
  {
  contentfulImprint {
        desc {
            raw
        }
        descImg {
            fluid {
                src
            }
        }
        banner {
            fluid(maxWidth:1600) {
                ...GatsbyContentfulFluid
            }
        }
    }
  }
`


export default imprints


