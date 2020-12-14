import React from 'react'
import { Container, Row, Col, Tabs , Tab, Form, Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import img1 from '../images/slide-1.jpg'
import { useStaticQuery, graphql } from "gatsby"




const HomePageProjects = () => {



const getprojects = useStaticQuery(graphql`
    {
      allContentfulProjects {
        nodes {
          projectTitle
          projectSubtitle
          projectImage {
            fluid {
              src
            }
          }
        }
      }
	}
`)


  const { allContentfulProjects: { nodes: allprojects }, } = getprojects

    return (
        <>

				<div class="section section-projects">

					<Container>

						<Row>
							<Col sm={12} md={12}>
								<h2 className="section-heading">
									PRODUCTS
								</h2>
							</Col>
						</Row>

						<Row>

							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            Fumed Silica
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            Resorcinol
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>

							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            Mannitol
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            NaOH Pellets
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            KOH Pellets
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            Pottassium iodide
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            Ferrous Sulphate
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            NMP
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            EP
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            2P
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            2-EHA
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            Lanolin and Lanolin Alcohols
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            NPG
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            Thioglycolic Acid
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>
							<Col sm={6} md={3}>
								<Form action="#" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
									<Form.Group>
                                        <div id="success"></div>
                                        <Button variant="primary" type="submit" className="btn btn-secondary btn-block btn-sidebar">
                                            Tetrahydrofuran
                                        </Button>
                                    </Form.Group>
                                </Form>
							</Col>



						</Row>
						

					</Container>
				
				</div>
			</>
    )
}

export default HomePageProjects
