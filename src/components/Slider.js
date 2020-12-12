import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel, Container } from 'react-bootstrap'

const Slider = () => {


  const data = useStaticQuery(graphql`
    {
      allContentfulSlider {
        nodes {
          sliderButton1LInk
          sliderButton1Text
          sliderButton2Link
          sliderButton2Text
          sliderCaption
          sliderHeading
          sliderImage {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  const { allContentfulSlider: {nodes: Sliders} } = data;
  
  
  return (
      <>
        <Carousel className="bannerslider">
            {Sliders.map((Slider) =>{
                return (
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Slider.sliderImage.fluid.src}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <Container>
                            <div className="wrap-caption">
                                <h2 className="caption-heading">
                                   {Slider.sliderHeading}
                                </h2>
                                <p className="excerpt">{Slider.sliderCaption}</p>	
                                <linK to={Slider.sliderButton1LInk} className="btn btn-primary" title="LEARN MORE">{Slider.sliderButton1Text}</linK> <linK to={Slider.sliderButton2Link} class="btn btn-secondary" title="CONTACT US">{Slider.sliderButton2Text}</linK>
                            </div>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                    )
            })}
        </Carousel>
      </>
  )
}

export default Slider

