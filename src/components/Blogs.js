import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql,Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Blogs = () => {

const getblogsdata = useStaticQuery(graphql`
    {
      allContentfulBlogs(sort: { fields:createdAt, order: DESC }) {
          nodes {
            slug
            title
            thumbnailImage {
              fluid {
                src
              }
              id
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
`)


const { allContentfulBlogs: {nodes: blogs}, } = getblogsdata


    return (
        <>
	<div className="section blog">
		<Container className="blogContainer">
			<Row>
				
				<Col sm={12} md={12}>
          <Fade left>
            <h2 className="section-heading">
              Insights
            </h2>
          </Fade>
				</Col>

      
                {blogs.map((blog) => {

                    return(
                          
                        	<Col sm={6} md={4} key={blog.id}>
                          
                          <article >
                                <Slide right>
                                  <div className="box-news-1">
                                    <Link to={`/blogs/${blog.slug}`} title="">
                                      <div className="media gbr">
                                          <img src={blog.thumbnailImage.fluid.src} alt="" className="img-responsive"/>
                                                
                                      </div>
                                      <div className="body">
                                          <div className="title">{blog.title}</div>
                                          <div className="meta">
                                              <span className="date"><i className="fa fa-clock-o"></i> {blog.date}</span>
                                              <span className="comments"><i className="fa fa-comment-o"></i> 0 Comments</span>
                                          </div>
                                      </div>
                                    </Link>
                                  </div>
                                </Slide>
                                </article>
                            </Col>
                            
                    )

                })}

			

			</Row>
		</Container>

	</div>  
        </>
    )
}

export default Blogs
