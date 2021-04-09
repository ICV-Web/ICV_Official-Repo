import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import $ from "jquery"

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
    allContentfulPageTemplate(sort: { fields: sortingOrder, order: ASC }) {
      nodes {
        slug
        title
        id
        }
      }
      allContentfulNavigationMenu(sort: { fields: sortingOrder, order: ASC }) {
        nodes {
          text
          link
        }
      }
    }
    
`

const Navbar = () => {
  useEffect(() => {
    $(".navbar-toggle").click(function () {
      $(this).toggleClass("collapsed")
      $(".navbar-collapse").toggleClass("in")
    })
  })

  const logourl = useStaticQuery(logosrc)
  const {allContentfulPageTemplate: { nodes: pageTemplate },} = logourl
  const {allContentfulNavigationMenu: { nodes: navItems },} = logourl
  return (
    <>
      <div className="navbar navbar-main">
        <div className="container container-nav">
          <div className="rowe">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target=".navbar-collapse"
                aria-expanded="false"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <Link className="navbar-brand" to="/">
              <img src={logourl.allContentfulHeader.nodes[0].logo.fluid.src} />
            </Link>

            <nav className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-left">
              {navItems.map((navItem) =>{
                return (
                  <li className="dropdown">
<Link
                    to={navItem.link}
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {navItem.text}
                  </Link>
                  </li>
                    
                    )
            })}
                {/* {pageTemplate.map(page => {
                  return (
                        <li className="dropdown" key={page.id}>
                          <Link
                            to={`/${page.slug}`}
                            data-toggle="dropdown"
                            data-hover="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                             {page.title}
                          </Link>
                        </li>
                  )
                })} */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
