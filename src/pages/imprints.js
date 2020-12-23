import React from 'react'
import Layout from '../components/layout'
import {Container,Row,Col} from "react-bootstrap"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"



const imprints = ( { data } ) => {

    const {desc} = data.contentfulImprint

    console.log(desc);


    return (
        <>
            <Layout>
                <div className="section why">
                    <Container>
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="box-partner">
                                    <div className="item">
                                    <div className="box-image">
                                        <div className="client-img">
                                            
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
    }
  }
`


export default imprints


