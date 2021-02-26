import React from "react"
import loadable from '@loadable/component'

const Layout = loadable(() => import('../components/layout'))
const HomeAboutSectionarea = loadable(() => import('../components/HomeAboutSection'))
const HomeSlider = loadable(() => import('../components/Slider'))
const ServiceSection = loadable(() => import('../components/HomeServices'))
const StatisticsSection = loadable(() => import('../components/Stats'))
const Gallery = loadable(() => import('../components/HomePageProjects'))
const Testimonials = loadable(() => import('../components/Testimonials'))
const Blogs = loadable(() => import('../components/Blogs'))


const IndexPage = () => (
  
  <Layout>
    <HomeSlider/>
    <HomeAboutSectionarea/>
    <ServiceSection/>
    <StatisticsSection/>
    <Gallery/>
    <Testimonials/>
    <Blogs/>
  </Layout>
)

export default IndexPage
