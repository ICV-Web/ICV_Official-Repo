import React from 'react'
import { Container , Row , Col  } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { FaWrench } from "react-icons/fa";





const HomeServices = () => {

const getservicesdata = useStaticQuery(graphql`
    {
      allContentfulHomeServices {
        nodes {
          serviceIcon
          servicesHeading
          serviceBoxImage {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

const { allContentfulHomeServices: {nodes: services }, } = getservicesdata;

    return (
        <>
            <div className="section service section-border bglight">
		<Container>
			<Row>
				<Col sm={12} md={12}>
					<h2 className="section-heading">
						SERVICES
					</h2>
				</Col>
			</Row>

			<Row>

			{services.map((service) => {

				return (
				<Col sm={6} md={4}>
					<div className="feature-box-8">
		              <div className="media">
		                <img src={service.serviceBoxImage.fluid.src} alt="rud" className="img-responsive"/>
		              </div>
		              <div className="body">
		                <div className="icon-holder">
		                  <span className={service.serviceIcon}></span>
		                </div>
		                <Link to="services-detail.html" className="title">{service.servicesHeading}</Link>
		              </div>
		            </div>
				</Col>
				)

			})}

			</Row>
		</Container>
	</div>
        </>
    )
}

export default HomeServices
