import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Slide from 'react-reveal/Slide';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useStaticQuery, graphql, Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import { nanoid } from 'nanoid'



const HomePageProjects = () => {

    const gethomepageprojects = useStaticQuery(graphql`
    {
      allContentfulProductPageContentHomePageProductSection (sort: { fields: sortingOrder, order: ASC }) {
        nodes {
          projectTitle
          projectImage {
            fluid {
              src
            }
          }
          productText {
            productText
          }
        }
      }
    }
  `)

  const { allContentfulProductPageContentHomePageProductSection: {nodes: projects }, } = gethomepageprojects;



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <>

				<div className="section section-projects">

					<Container>

						<Row>
							<Col sm={12} md={12}>
                                <Slide left>
								<h2 className="section-heading">
									PRODUCTS
								</h2>
                                </Slide>
							</Col>
						</Row>
                        <Slide right>
						<Row>
                            <Col md={12}>
                                <Carousel infinite={true}    transitionDuration={500}
 autoPlay={true} autoPlaySpeed={2000} responsive={responsive}>



                                    {projects.map((project) => {

                                        return(
                                            <div className="item" key={nanoid()}>
                                                <div className="flip-box">
                                                    <div className="flip-box-inner">
                                                        <div className="flip-box-front" style={{ background: `url(${project.projectImage.fluid.src})`  }}>
                                                            <div  className="project-image-wrapper">
                                                            </div>
                                                            <span  className="title">{project.projectTitle}</span>
                                                        </div>
                                                        <div className="flip-box-back">
                                                            <p>{project.productText.productText}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )

                                    })}
        
                                </Carousel>
                            </Col>
						</Row>
                        <Row>
                            <Col>
                                <Fade bottom>
                                    <div className="text-center" style={{marginTop: "40px"}}>
                                        <Link to="/products" title="" className="btn btn-cta bgblue">View All Products</Link>
                                    </div>
                                </Fade>
                            </Col>
		                </Row>
						</Slide>

					</Container>
				
				</div>
			</>
    )
}

export default HomePageProjects
