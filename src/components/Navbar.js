import React, { useState, useEffect } from 'react'
import { Link  } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import $ from 'jquery'


const logosrc = graphql`
 {
      allContentfulHeader {
        nodes {
          logo {
            fluid {
              src
            }
          }
        }
      }
}
`

 

const Navbar = () => {

	
  useEffect(() => {
  		$( ".navbar-toggle" ).click(function() {
			$(this).toggleClass("collapsed")
			$(".navbar-collapse").toggleClass("in")
		});
  });
	

	
	const logourl = useStaticQuery(logosrc);
    return (

	


        <>
          <div className="navbar navbar-main">
			<div className="container container-nav">
				<div className="rowe">
						
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						
					</div>

					<Link className="navbar-brand" to="/">
                        <img src={logourl.allContentfulHeader.nodes[0].logo.fluid.src	} />
					</Link>

					<nav className="navbar-collapse collapse">
						<ul className="nav navbar-nav navbar-left">
							<li className="dropdown">
							  <Link to="/"  data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">HOME</Link>
							</li>
							
							<li className="dropdown">
							  <Link to="/ourcore"  data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">OUR CORE<span className="caret"></span></Link>
							</li>
							
							<li className="dropdown">
							  <Link to="/businesssegment"  data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">BUSINESS SEGMENTS<span className="caret"></span></Link>
							</li>
							

				 			<li className="dropdown">
							  <Link to="/products"  data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PRODUCTS<span className="caret"></span></Link>
							</li>


							<li className="dropdown">
							  <Link to="/blogs"  data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">NEWS / PRESS RELEASE</Link>
							</li>						
							
							
							<li className="dropdown">
							  <Link to="/downloads"  data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">DOWNLOADS</Link>
							</li>
							
							
							<li className="dropdown">
							  <Link to="/contact"  data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CONTACT US</Link>
							</li>


						</ul>


					</nav>
						
				</div>
			</div>
	    </div>  
        </>
    )
}

export default Navbar
