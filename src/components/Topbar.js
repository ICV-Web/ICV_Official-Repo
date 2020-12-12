import React from 'react'
import {Container,Row,Col,Button} from "react-bootstrap"
import { Link } from 'gatsby'
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby"

 const socialmedialinks = graphql`
  {
    allContentfulHeader {
      nodes {
        twitterLink
        instagramLink
        facebookLink
		pinterestLink
		pakLang {
			fluid {
			  src
			}
		  }
		  germanyLang {
			fluid {
			  src
			}
		  }
		  uaeLang {
			fluid {
			  src
			}
		  }
      }
    }
  }
`


  
const Topbar = () => {

	const links = useStaticQuery(socialmedialinks);
	console.log(links)
	
    return (
        <>
           <div className="topbar">
			<Container>
				<Row>
					<Col sm={5} md={6}>
						<div className="topbar-left">
							<div className="welcome-text">
							Language: 
							<Button className="lang-button">
                            	<img src={links.allContentfulHeader.nodes[0].pakLang.fluid.src}></img>
                            </Button>
							<Button className="lang-button">
								<img src={links.allContentfulHeader.nodes[0].germanyLang.fluid.src}></img>
                            </Button>
							<Button className="lang-button">
								<img src={links.allContentfulHeader.nodes[0].uaeLang.fluid.src}></img>
                            </Button>
							</div>
						</div>
					</Col>
					<Col  sm={7} md={6}>
						<div className="topbar-right">
							<ul className="topbar-menu">
								<li><Link to="/careers" title="Career">Careers</Link></li>
							</ul>
							<ul className="topbar-sosmed">
							<li>
								<Link to={links.allContentfulHeader.nodes[0].facebookLink}><FaFacebookF/></Link>
							</li>
							<li>
								<Link to={links.allContentfulHeader.nodes[0].twitterLink}><FaInstagram/></Link>
							</li>
							<li>
								<Link to={links.allContentfulHeader.nodes[0].instagramLink}><FaLinkedinIn/></Link>
							</li>
							<li>
								<Link to={links.allContentfulHeader.nodes[0].pinterestLink}><FaTwitter/></Link>
							</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</div> 
        </>
    )
}

export default Topbar
