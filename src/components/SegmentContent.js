import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { useStaticQuery, graphql, Link } from "gatsby"


const SegmentContent = () => {
    
    const Segmentdata = useStaticQuery(graphql`
    {
      allContentfulBusinessSegment {
        nodes {
          desc1 {
            desc1
          }
          desc2 {
            desc2
          }
          descImg1 {
            fluid {
              src
            }
          }
          descImg2 {
            fluid {
              src
            }
          }
          descImg3 {
            fluid {
              src
            }
          }
          descImg4 {
            fluid {
              src
            }
          }
          descImg5 {
            fluid {
              src
            }
          }
          descImg6 {
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
        <div className="section why">
           <Container>
               <Row>
                   <Col md={12} sm={12}>
                       <div className="content">
                            <p>
			                {Segmentdata.allContentfulBusinessSegment.nodes[0].desc1.desc1}
                            </p>
                            <p>
                            {Segmentdata.allContentfulBusinessSegment.nodes[0].desc2.desc2}
                            </p>
                       </div>
                   </Col>
                   <Col md={4} sm={6}>
                        <div className="feature-box-8">
                            <div className="media">
                                <img src={Segmentdata.allContentfulBusinessSegment.nodes[0].descImg1.fluid.src} alt="rud" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="icon-holder">
                                <span className="fa fa-gears"></span>
                                </div>
                                <Link to="services-detail.html" className="title">MECHANICAL ENGINEERING</Link>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed</p>
                                <Link to="services-detail.html" className="readmore">READ MORE</Link>
                            </div>
                        </div>
                   </Col>
                   <Col md={4} sm={6}>
                        <div className="feature-box-8">
                            <div className="media">
                                <img src={Segmentdata.allContentfulBusinessSegment.nodes[0].descImg2.fluid.src} alt="rud" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="icon-holder">
                                    <span className="fa fa-leaf"></span>
                                </div>
                                <Link to="services-detail.html" className="title">AGRICULTURAL PROCESSING</Link>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed</p>
                                <Link to="services-detail.html" className="readmore">READ MORE</Link>
                            </div>
                        </div>
                   </Col>
                   <Col md={4} sm={6}>
                        <div className="feature-box-8">
                            <div className="media">
                                <img src={Segmentdata.allContentfulBusinessSegment.nodes[0].descImg3.fluid.src} alt="rud" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="icon-holder">
                                    <span className="fa fa-fire"></span>
                                </div>
                                <Link to="services-detail.html" className="title">OILS AND LUBRICANTS</Link>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed</p>
                                <Link to="services-detail.html" className="readmore">READ MORE</Link>
                            </div>
                        </div>
                   </Col>
                   <Col md={4} sm={6}>
                        <div className="feature-box-8">
                            <div className="media">
                                <img src={Segmentdata.allContentfulBusinessSegment.nodes[0].descImg4.fluid.src} alt="rud" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="icon-holder">
                                    <span className="fa fa-flash"></span>
                                </div>
                                <Link to="services-detail.html" className="title">POWER AND ENERGY</Link>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed</p>
                                <Link to="services-detail.html" className="readmore">READ MORE</Link>
                            </div>
                        </div>
                   </Col>
                   <Col md={4} sm={6}>
                        <div className="feature-box-8">
                            <div className="media">
                                <img src={Segmentdata.allContentfulBusinessSegment.nodes[0].descImg5.fluid.src} alt="rud" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="icon-holder">
                                    <span className="fa fa-flask"></span>
                                </div>
                                <Link to="services-detail.html" className="title">CHEMICAL RESEARCH</Link>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed</p>
                                <Link to="services-detail.html" className="readmore">READ MORE</Link>
                            </div>
                        </div>
                   </Col>
                   <Col md={4} sm={6}>
                        <div class="feature-box-8">
                        <div class="media">
                            <img src={Segmentdata.allContentfulBusinessSegment.nodes[0].descImg6.fluid.src} alt="rud" class="img-responsive"></img>
                        </div>
                        <div class="body">
                            <div class="icon-holder">
                                <span class="fa fa-cubes"></span>
                            </div>
                            <Link to="services-detail.html" class="title">MATERIAL ENGINEERING</Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed</p>
                            <Link to="services-detail.html" class="readmore">READ MORE</Link>
                        </div>
                        </div>
                   </Col>
                  
                </Row>
            </Container>
        </div>    
        </>
    )
}

export default SegmentContent