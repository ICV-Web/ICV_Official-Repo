import React from 'react'
import { Container , Row , Col  } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import { nanoid } from 'nanoid'

const HomeServices = () => {

const getservicesdata = useStaticQuery(graphql`
{
      allContentfulBusinessSegmentPageHomePageContent(limit: 3) {
        nodes {
          servicesHeading
          serviceBoxImage {
            fluid {
              src
            }
		  }
		  
		  svgicon {
			file {
				url
			}
		 }
          
        }
      }
    }
  `)

const { allContentfulBusinessSegmentPageHomePageContent: {nodes: services }, } = getservicesdata;

    return (
        <>
            <div className="section service section-border bglight">
		<Container>
			<Row>
				
				<Col sm={12} md={12}>
					<Fade left>
						<h2 className="section-heading">
							Business Segments
						</h2>
					</Fade>
				</Col>
			</Row>

			<Row>

			{services.map((service) => {

				return (
				<Col sm={6} md={4} key={nanoid()}>
					<Fade bottom>
						<div className="feature-box-8">
							<div className="media">
								<img src={service.serviceBoxImage.fluid.src} alt="rud" className="img-responsive"/>
							</div>
							<div className="body">
								<div className="icon-holder">
									<img src={service.svgicon.file.url} alt="svgicon"/>
								</div>
								<Link to="/businesssegment" className="title">{service.servicesHeading}</Link>
							</div>
						</div>
					</Fade>
				</Col>
				)

			})}

			</Row>
			<Row>
				<Col>
				<Fade bottom>
					<div className="text-center">
						<Link to="/businesssegment" title="" className="btn btn-cta bgblue">View All Business Segments</Link>
					</div>
				</Fade>
				</Col>
			</Row>
		</Container>
	</div>
        </>
    )
}

export default HomeServices
