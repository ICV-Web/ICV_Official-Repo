import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import Layout from '../components/layout'
import News from '../components/Blogs'
import {Link} from 'gatsby'



const blogs = ({data}) => {




    return (
        <>
            <Layout>
                <div className="section banner-page about" style={{backgroundImage:   `url(${data.allContentfulNewsPressReleasePage.nodes[0].bannerIamge.fluid.src})`  }}>
                    <Container>
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="title-page">News</div>
                                <ol className="breadcrumb">
                                    <li><Link to="index.html">Home/</Link></li>
                                    <li className="active">News</li>
                                </ol>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <News/>
            </Layout>
        </>
    )
}

export default blogs
export const query = graphql`
  {
    allContentfulNewsPressReleasePage {
      nodes {
        bannerIamge {
          fluid(maxWidth:1356, maxHeight: 275,quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`