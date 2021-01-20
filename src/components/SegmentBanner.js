import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import segmentbannerimg from '../images/banner-page.jpg'

const SegmentBanner = () => {


    const SegmentBannerimg = useStaticQuery(graphql`
    {
      allContentfulBusinessSegment {
        nodes {
          bannerImg {
            fluid {
              src
            }
          }
          bannerImgMob {
            fluid {
              src
            }
          }
        }
      }
    }
  `)
  
    return (
        <>
        <div className="section banner-page about b1-segment" style={{ backgroundImage:   `url(${SegmentBannerimg.allContentfulBusinessSegment.nodes[0].bannerImg.fluid.src})`  }}>
        <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="title-page">Business Segments</div>
                        <ol className="breadcrumb">
                            <li><Link to="index.html">Home</Link></li>
                            <li className="active">Business Segments</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="section banner-page about b2-segment" style={{ backgroundImage:   `url(${SegmentBannerimg.allContentfulBusinessSegment.nodes[0].bannerImgMob.fluid.src})` }}>  
        <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="title-page">Business Segments</div>
                        <ol className="breadcrumb">
                            <li><Link to="index.html">Home</Link></li>
                            <li className="active">Business Segments</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default SegmentBanner