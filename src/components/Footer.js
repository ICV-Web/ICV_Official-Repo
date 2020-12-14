import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {Container,Row,Col} from "react-bootstrap"
import { FaEnvelope,FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import { Link } from 'gatsby'


const Footer = () => {

	const footerdata = useStaticQuery(graphql`
    {
      allContentfulFooter {
        nodes {
          officeLocation1
          officeLocation2
          officeLocation3
          officeAddress1
          officeAddress2
          officeAddress3
          officeContact1
          officeContact2
          officeContact3
          officeMail1
          officeMail2
          officeMail3
          socialLink1
		  socialLink2
		  socialLink3
          socialLink4
          subscriptionText {
            subscriptionText
          }
          footerDesc {
            footerDesc
          }
          copyright
          logo {
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
	<div className="section info overlap-bottom">
		<Container>
			<Row>
				
				<Col md={4} sm={4}>
					<div className="box-icon-4">
						<div className="icon"><i className="fa fa-phone"></i></div>
						<div className="body-content">
							<div className="heading">{footerdata.allContentfulFooter.nodes[0].officeLocation1}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeAddress1}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeContact1}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeMail1}</div>
						</div>
					</div>
				</Col>
				<Col md={4} sm={4}>
					<div className="box-icon-4">
						<div className="icon"><i className="fa fa-map-marker"></i></div>
						<div className="body-content">
							<div className="heading">{footerdata.allContentfulFooter.nodes[0].officeLocation2}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeAddress2}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeContact2}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeMail2}</div>
						</div>
					</div>
				</Col>
				<Col md={4} sm={4}>
					<div className="box-icon-4">
						<div className="icon"><i className="fa fa-envelope"></i></div>
						<div className="body-content">
							<div className="heading">{footerdata.allContentfulFooter.nodes[0].officeLocation3}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeAddress3}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeContact3}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeMail3}</div>
						</div>
					</div>
				</Col>
				
			</Row>

		</Container>
	</div>

	<div className="footer">
		
		<Container>
			
			<Row>
				<Col md={3} sm={3}>
					<div className="footer-item">
						<img src={footerdata.allContentfulFooter.nodes[0].logo.fluid.src} alt="logo bottom" className="logo-bottom"/>
						<p>{footerdata.allContentfulFooter.nodes[0].footerDesc.footerDesc}</p>
						<div className="footer-sosmed">
							<Link to={footerdata.allContentfulFooter.nodes[0].socialLink1} title="">
								<div className="item">
									<FaFacebookF/>
								</div>
							</Link>
							<Link to={footerdata.allContentfulFooter.nodes[0].socialLink3} title="">
								<div className="item">
									<FaInstagram/>
								</div>
							</Link>
							<Link to={footerdata.allContentfulFooter.nodes[0].socialLink2} title="">
								<div className="item">
									<FaLinkedinIn/>
								</div>
							</Link>
							<Link to={footerdata.allContentfulFooter.nodes[0].socialLink4} title="">
								<div className="item">
									<FaTwitter/>
								</div>
							</Link>
						</div>
					</div>
				</Col>
				<Col md={3} sm={3}>
					<div className="footer-item">
						<div className="footer-title">
						Product
						</div>
						<ul className="list">
							{/* <ul className="recent-post"></ul> */}
							{/* <li><Link to="" title="">The Best in dolor sit amet consectetur adipisicing elit sed</Link>
							<span className="date"><i className="fa fa-clock-o"></i> September 1, 2020</span></li><li><Link to="" title="">The Best in dolor sit amet consectetur adipisicing elit sed</Link>
							<span className="date"><i className="fa fa-clock-o"></i> September 1, 2020</span></li> */}
							<li><Link to="#" title="">Fumed Silica</Link></li>
							<li><Link to="#" title="">Resorcinol</Link></li>
							<li><Link to="#" title="">Mannitol</Link></li>
							<li><Link to="#" title="">NaOH Pellets</Link></li>
							<li><Link to="#" title="">KOH Pellets</Link></li>
							<li><Link to="#" title="">Ferrous Sulphate</Link></li>
							<li><Link to="#" title="">NMP</Link></li>
							<li><Link to="#" title="">EP</Link></li>
							<li><Link to="#" title="">2P</Link></li>
							<li><Link to="#" title="">2-EHA</Link></li>
							<li><Link to="#" title="">Lanolin and Lanolin AlcoholsPottassium iodide</Link></li>
							<li><Link to="#" title="">NPG</Link></li>
							<li><Link to="#" title="">Thioglycolic Acid</Link></li>
							<li><Link to="#" title="">Tetrahydrofuran</Link></li>
						</ul>
					</div>
				</Col>
				<Col md={3} sm={3}>
					<div className="footer-item">
						<div className="footer-title">
							Company
						</div>
						<ul className="list">
							<li><Link to="" title="">Our Core</Link></li>
							<li><Link to="" title="">Business Segments</Link></li>
							<li><Link to="" title="">News / Press Release</Link></li>
							<li><Link to="" title="">Careers</Link></li>
							<li><Link to="" title="">Downloads</Link></li>
						</ul>
					</div>
				</Col>
				<Col md={3} sm={3}>
					<div className="footer-item">
						<div className="footer-title">
							Subscribe
						</div>
						<p>{footerdata.allContentfulFooter.nodes[0].subscriptionText.subscriptionText}</p>
						<form action="#" className="footer-subscribe">
			              <input type="email" name="EMAIL" className="form-control" placeholder="enter your email"/>
			              <input id="p_submit" type="submit" value="send"/>
			              <label for="p_submit"><FaEnvelope/></label>
			            </form>
					</div>
				</Col>
			</Row>
		</Container>
		
		<div className="fcopy">
			<Container>
				<Row>
					<Col md={6} sm={7}>
						<p className="ftex">{footerdata.allContentfulFooter.nodes[0].copyright}</p> 
					</Col>
					<Col md={6} sm={5}>
					<div className="topbar-right">
						<ul className="topbar-menu">
								<li><Link to="imprint.html" title="Career">Imprint</Link></li> 
								<li><Link to="#" title="">Cookie Policy</Link></li>
								<li><Link to="data-protection.html" title="">Data Protection</Link></li>
						</ul>
					</div>
					</Col>
				</Row>
			</Container>
		</div>
		
	</div>
	
        </>
    )
}

export default Footer
