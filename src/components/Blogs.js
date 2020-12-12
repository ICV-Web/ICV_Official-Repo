import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"


const Blogs = () => {

const getblogsdata = useStaticQuery(graphql`
    {
      allContentfulBlogs {
        nodes {
          title
          featuredImage {
            fluid {
              src
            }
          }
        }
      }
    }
`)


const { allContentfulBlogs: {nodes: blogs}, } = getblogsdata


    return (
        <>
	<div className="section blog">
		<Container>
			<Row>
				
				<Col sm={12} md={12}>
					<h2 className="section-heading">
						News / Press Release
					</h2>
				</Col>


                {blogs.map((blog) => {

                    return(
                        	<Col sm={6} md={4}>
                                <div className="box-news-1">
                                    <div className="media gbr">
                                        <img src={blog.featuredImage.fluid.src} alt="" className="img-responsive"/>
                                    </div>
                                    <div className="body">
                                        <div className="title"><a href="blog-single.html" title="">{blog.title}</a></div>
                                        <div className="meta">
                                            <span className="date"><i className="fa fa-clock-o"></i> Aug 31, 2020</span>
                                            <span className="comments"><i className="fa fa-comment-o"></i> 0 Comments</span>
                                        </div>
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

export default Blogs
