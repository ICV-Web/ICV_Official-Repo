import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const DownloadContent = () => {
    const downloaddata = useStaticQuery(graphql`
    {
      allContentfulDownloads {
        nodes {
          downloadsDesc {
            downloadsDesc
          }
          downloadsDescImg1 {
            fluid {
              src
            }
          }
          downloadsDescImg2 {
            fluid {
              src
            }
          }
          downloadsDescImg3 {
            fluid {
              src
            }
          }
          downloadsDescImg4 {
            fluid {
              src
            }
          }
          downloadsDescImg5 {
            fluid {
              src
            }
          }
          downloadsDescImg6 {
            fluid {
              src
            }
          }
          downloadsDescImg7 {
            fluid {
              src
            }
          }
          downloadsDescImg8 {
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
                            <p className="section-heading-4">
                                {downloaddata.allContentfulDownloads.nodes[0].downloadsDesc.downloadsDesc}
                            </p>
                       </div>
                   </Col>
                   <Col md={3} sm={6}>
                        <div className="box-news-1">
                            <div className="media gbr">
                                <img src={downloaddata.allContentfulDownloads.nodes[0].downloadsDescImg1.fluid.src} alt="" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="title">
                                    <Link to="blog-single.html" title="">Chemical Product</Link>
                                </div>
                                <div className="meta">
                                    <span className="date"><i className="fa fa-file"></i> Click below to Download PDF</span>
                                </div>
                            </div>
					    </div>
                   </Col>
                   <Col md={3} sm={6}>
                        <div className="box-news-1">
                            <div className="media gbr">
                                <img src={downloaddata.allContentfulDownloads.nodes[0].downloadsDescImg2.fluid.src} alt="" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="title">
                                    <Link to="blog-single.html" title="">Chemical Product</Link>
                                </div>
                                <div className="meta">
                                    <span className="date"><i className="fa fa-file"></i> Click below to Download PDF</span>
                                </div>
                            </div>
					    </div>
                   </Col>
                   <Col md={3} sm={6}>
                        <div className="box-news-1">
                            <div className="media gbr">
                                <img src={downloaddata.allContentfulDownloads.nodes[0].downloadsDescImg3.fluid.src} alt="" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="title">
                                    <Link to="blog-single.html" title="">Chemical Product</Link>
                                </div>
                                <div className="meta">
                                    <span className="date"><i className="fa fa-file"></i> Click below to Download PDF</span>
                                </div>
                            </div>
					    </div>
                   </Col>
                   <Col md={3} sm={6}>
                        <div className="box-news-1">
                            <div className="media gbr">
                                <img src={downloaddata.allContentfulDownloads.nodes[0].downloadsDescImg4.fluid.src} alt="" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="title">
                                    <Link to="blog-single.html" title="">Chemical Product</Link>
                                </div>
                                <div className="meta">
                                    <span className="date"><i className="fa fa-file"></i> Click below to Download PDF</span>
                                </div>
                            </div>
					    </div>
                   </Col>
                   <Col md={3} sm={6}>
                        <div className="box-news-1">
                            <div className="media gbr">
                                <img src={downloaddata.allContentfulDownloads.nodes[0].downloadsDescImg5.fluid.src} alt="" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="title">
                                    <Link to="blog-single.html" title="">Chemical Product</Link>
                                </div>
                                <div className="meta">
                                    <span className="date"><i className="fa fa-file"></i> Click below to Download PDF</span>
                                </div>
                            </div>
					    </div>
                   </Col>
                   <Col md={3} sm={6}>
                        <div className="box-news-1">
                            <div className="media gbr">
                                <img src={downloaddata.allContentfulDownloads.nodes[0].downloadsDescImg6.fluid.src} alt="" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="title">
                                    <Link to="blog-single.html" title="">Chemical Product</Link>
                                </div>
                                <div className="meta">
                                    <span className="date"><i className="fa fa-file"></i> Click below to Download PDF</span>
                                </div>
                            </div>
					    </div>
                   </Col>
                   <Col md={3} sm={6}>
                        <div className="box-news-1">
                            <div className="media gbr">
                                <img src={downloaddata.allContentfulDownloads.nodes[0].downloadsDescImg7.fluid.src} alt="" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="title">
                                    <Link to="blog-single.html" title="">Chemical Product</Link>
                                </div>
                                <div className="meta">
                                    <span className="date"><i className="fa fa-file"></i> Click below to Download PDF</span>
                                </div>
                            </div>
					    </div>
                   </Col>
                   <Col md={3} sm={6}>
                        <div className="box-news-1">
                            <div className="media gbr">
                                <img src={downloaddata.allContentfulDownloads.nodes[0].downloadsDescImg8.fluid.src} alt="" className="img-responsive"></img>
                            </div>
                            <div className="body">
                                <div className="title">
                                    <Link to="blog-single.html" title="">Chemical Product</Link>
                                </div>
                                <div className="meta">
                                    <span className="date"><i className="fa fa-file"></i> Click below to Download PDF</span>
                                </div>
                            </div>
					    </div>
                   </Col>
                  
                </Row>
            </Container>
        </div>    
        </>
    )
}

export default DownloadContent