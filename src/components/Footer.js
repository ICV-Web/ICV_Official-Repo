import React, {useState} from 'react'
import { useStaticQuery, graphql,navigate } from "gatsby"
import {Container,Row,Col,Form} from "react-bootstrap"
import { FaEnvelope,FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade';

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
	  
	  allContentfulProductPageContentHomePageProductSection(limit: 5) {
        nodes {
          projectTitle
        }
      }

    }
  `)


const { allContentfulProductPageContentHomePageProductSection: {nodes: footerprojects }, } = footerdata;


const [formState, setFormState] = useState({
	email: "",
})
const handleChange=e =>{
	setFormState({
		...formState,
		[e.target.name]:e.target.value,
	})
}
const handleSubmit=e =>{
 fetch("/", {
	 method: "POST",
	 headers: { "Content-Type": "application/x-www-form-urlencoded" },
	 body: encode({ "form-name": "contact", ...formState })
   })
	 .then(() => navigate("/validation"))
	 .catch(error => console.log(error));

   e.preventDefault();
}
const encode = (data) => {
 return Object.keys(data)
	 .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
	 .join("&");
}

    return (
        <>
		
	<div className="section info overlap-bottom cont-mob-foot">
		<Container>
		
			<Row>
				
				<Col md={4} sm={12}>
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
				<Col md={4} sm={12}>
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
				<Col md={4} sm={12}>
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
				<Col md={3} sm={12} xs={12}>
					<div className="footer-item">
						<div className="f-logo">
							<img src={footerdata.allContentfulFooter.nodes[0].logo.fluid.src} alt="logo bottom" className="logo-bottom"/>
						</div>
						
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
									<div><p className="vis-fot">Visibility not shown</p></div>
								
									
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
				<Col md={3} sm={3} xs={12}>
					<div className="footer-item">
						<div className="footer-title">
						Product
						</div>
						<ul className="list">


						{footerprojects.map((footerprojectlink) => {

								return(
									<>
										<li><Link to="/products" title="">{footerprojectlink.projectTitle}</Link></li>

									</>
								)

						})}

							<li><Link to="/products" title="">Read More</Link></li>


							{/* <ul className="recent-post"></ul> */}
							{/* <li><Link to="" title="">The Best in dolor sit amet consectetur adipisicing elit sed</Link>
							<span className="date"><i className="fa fa-clock-o"></i> September 1, 2020</span></li><li><Link to="" title="">The Best in dolor sit amet consectetur adipisicing elit sed</Link>
							<span className="date"><i className="fa fa-clock-o"></i> September 1, 2020</span></li> */}
							
						</ul>
					</div>
				</Col>
				<Col md={3} sm={3} xs={12}>
					<div className="footer-item">
						<div className="footer-title">
							Company
						</div>
						<ul className="list">
							<li><Link to="/ourcore" title="">Our Core</Link></li>
							<li><Link to="/businesssegment" title="">Business Segments</Link></li>
							<li><Link to="/blogs" title="">News / Press Release</Link></li>
							<li><Link to="/careers" title="">Careers</Link></li>
							<li><Link to="/downloads" title="">Downloads</Link></li>
						</ul>
					</div>
				</Col>
				<Col md={3} sm={6} xs={12}>
					<div className="footer-item">
						<div className="footer-title">
							Subscribe
						</div>
						<p>{footerdata.allContentfulFooter.nodes[0].subscriptionText.subscriptionText}</p>
						<Form action="#" className="footer-subscribe" data-toggle="validator" noValidate="true" onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
							<input type="hidden" name="form-name" value="contact" />
							<Form.Group>
								<Form.Control type="email" name="email" className="form-control" placeholder="enter your email" onChange={handleChange} value={formState.email}/>
							</Form.Group>
							<Form.Group>
								<Form.Control id="p_submit" type="submit" value="send"/>
			              		<label for="p_submit"><FaEnvelope/></label>
							</Form.Group>
			              	
			            </Form>
					</div>
				</Col>
			</Row>
		</Container>
		
		<div className="fcopy">
			<Container>
				<Row>
					<Col md={6} sm={12}>
						<p className="ftex resp-ftex">{footerdata.allContentfulFooter.nodes[0].copyright}</p> 
					</Col>
					<Col md={6} sm={12}>
					<div className="topbar-right">
						<ul className="topbar-menu">
								<li><Link to="/imprints" title="Career">Imprint</Link></li> 
								<li><Link to="/cookiepolicy" title="">Cookie Policy</Link></li>
								<li><Link to="/dataprotection" title="">Data Protection</Link></li>
								<li><Link to="/downloads"  title="">Downloads</Link></li>
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
