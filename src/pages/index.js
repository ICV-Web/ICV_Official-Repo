import React from "react"
import Layout from "../components/layout"
import HomeAboutSectionarea from '../components/HomeAboutSection'
import HomeSlider from '../components/Slider'
import ServiceSection from '../components/HomeServices'
import StatisticsSection from '../components/Stats'
import Gallery from '../components/HomePageProjects'
import {fetcheco} from '../components/ecoprojects'
import Testimonials from '../components/Testimonials'
import CTA from '../components/HomeCTA'
import Blogs from '../components/Blogs'
import Partners from '../components/Partners'

const IndexPage = () => (
  
  <Layout>
    <HomeSlider/>
    <HomeAboutSectionarea/>
    <ServiceSection/>
    <StatisticsSection/>
    <Gallery/>
    <Testimonials/>
    <CTA/>
    <Blogs/>
  </Layout>
)

export default IndexPage
