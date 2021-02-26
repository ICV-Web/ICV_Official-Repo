import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Fade from 'react-reveal/Fade';

const DownloadContent = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulDownloads {
        nodes {
          downloadsDesc {
            downloadsDesc
          }
        }
      }
      allContentfulDownloadPage(sort: { fields:sortingOrder, order: ASC }) {
        nodes {
          featuredImg {
            fluid {
              src
            }
          }
          pdf {
            file {
              url
            }
          }
          title
        }
      }
    }
  `)
    const {allContentfulDownloadPage:{nodes: alldownload},} = data

    return (
        <>
        <div className="section why">
           <Container>
               <Row>
                   <Col md={12} sm={12}>
                   <Fade left>
                       <div className="content">
                            <p className="section-heading-4">
                              {data.allContentfulDownloads.nodes[0].downloadsDesc.downloadsDesc}
                            </p>
                       </div>
                       </Fade>
                   </Col>
                   
            
                   {alldownload.map((downloads) => {
                   return(
                      
                       
                            <Col sm={6} md={4} lg={3} xl={3}>
                          <Fade bottom>
                     
                              <div className="box-news-1">
                                <div className="media gbr">
                                    <img src={downloads.featuredImg.fluid.src} alt="" className="img-responsive"></img>
                                </div>
                                <div className="body">
                                    <div className="title">
                                        <Link to={downloads.pdf.file.url} target="_blank" title="">{downloads.title}</Link>
                                    </div>
                                    <div className="meta">
                                        <span className="date"><i className="fa fa-file"></i>Download PDF</span>
                                    </div>
                                </div>
                              </div>  
                              </Fade>   
                            </Col>
                         
                     
                      
                   )
                    })}
             </Row>
                        </Container>
           </div> 
        </>
    )
}
// export const query = graphql`
//   {
//     allContentfulDownloads {
//       nodes {
//         downloadsDesc {
//           downloadsDesc
//         }
//       }
//     }
//   }`
export default DownloadContent
