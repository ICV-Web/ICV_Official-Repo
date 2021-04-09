import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel, Container } from 'react-bootstrap'
import Img from "gatsby-image"
import { nanoid } from 'nanoid'
const Slider = () => {


  const data = useStaticQuery(graphql`
    {
      allContentfulHomePageBannerSlider(sort: { fields:sortingOrder, order: ASC }) {
        nodes {
          sliderButton1LInk
          sliderButton1Text
          sliderButton2Link
          sliderButton2Text
          sliderCaption
          sliderHeading
          sliderImage {
            fluid(maxWidth:1920, maxHeight:900,quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  const { allContentfulHomePageBannerSlider: {nodes: Sliders} } = data;
  
  
  return (
      <>
        <Carousel className="bannerslider">
            {Sliders.map((Slider) => {
                return (
                    <Carousel.Item key={nanoid()}>
                   { /* <img
                    //   className="d-block w-100"
                    //   src={Slider.sliderImage.fluid.src}
                    //   alt="First slide"
                   //   />*/}
                      <Img className="d-block w-100 section banner-page-home about"
                          fluid={Slider.sliderImage.fluid} 
                          key={Slider.sliderImage.fluid.src}
                          alt={Slider.sliderHeading}
                      /> 
                      <div>
                        <Carousel.Caption>
                            <Container>
                                <div className="wrap-caption">
                                    <h2 className="caption-heading">
                                      {Slider.sliderHeading}
                                    </h2>
                                    <p className="excerpt">{Slider.sliderCaption}</p>
                                    {Slider.sliderButton1Text != null && (
                                      <Link to={Slider.sliderButton1LInk} className="btn btn-primary" title="LEARN MORE">{Slider.sliderButton1Text}</Link> 
                                    )}

                                       {Slider.sliderButton1Text != null && (
                                      <Link to={Slider.sliderButton2Link} class="btn btn-secondary" title="CONTACT US">{Slider.sliderButton2Text}</Link>
                                    )}
                                </div>
                            </Container>
                        </Carousel.Caption>
                      </div>
                    </Carousel.Item>
                    )
            })}
        </Carousel>
      </>
  )
}

export default Slider

