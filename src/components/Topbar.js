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
		  chineseLang {
        fluid {
          src
        }
      }
		  
      }
    }
	contentfulHeader {
    showIcon1
    showIcon2
    showIcon3
	showIcon4
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
					<Col sm={5} md={6} xs={6}>
						<div className="topbar-left">
							
							<div className="welcome-text">

								<div className={links.contentfulHeader.showIcon1 === true ? `tr` : `fal`}>
									<Button className="lang-button">
											<img src={links.allContentfulHeader.nodes[0].pakLang.fluid.src}/>
									</Button>
								</div>
								<div className={links.contentfulHeader.showIcon2 === true ? `tr` : `fal`}>
									<Button className="lang-button">
										<img src={links.allContentfulHeader.nodes[0].germanyLang.fluid.src}/>										
									</Button>
								</div>	
								<div className={links.contentfulHeader.showIcon3 === true ? `tr` : `fal`}>
									<Button className="lang-button">
										<img src={links.allContentfulHeader.nodes[0].uaeLang.fluid.src}/>
									</Button>
								</div>
								<div className={links.contentfulHeader.showIcon4 === true ? `tr` : `fal`}>
									<Button className="lang-button">
										<img src={links.allContentfulHeader.nodes[0].chineseLang.fluid.src}/>
									</Button>
								</div>
							</div>
						</div>
					</Col>
					<Col  sm={7} md={6} xs={6}>
						<div className="topbar-right">
							{/*<ul className="topbar-menu">
								<li><Link to="/imprints" title="Career">Imprints</Link></li>
								<li><Link to="/careers" title="Career">Careers</Link></li>
							</ul>*/}
							<ul className="topbar-sosmed">
							<li>
								<a href={links.allContentfulHeader.nodes[0].facebookLink} target="_blank"><FaFacebookF/></a>
							</li>
							<li>
								<a href={links.allContentfulHeader.nodes[0].twitterLink} target="_blank"><FaInstagram/></a>
							</li>
							<li>
								<a href={links.allContentfulHeader.nodes[0].instagramLink} target="_blank"><FaLinkedinIn/></a>
							</li>
							<li>
								<a href={links.allContentfulHeader.nodes[0].pinterestLink} target="_blank"><FaTwitter/></a>
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
