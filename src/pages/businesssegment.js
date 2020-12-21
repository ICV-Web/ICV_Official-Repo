import React from "react"
import Layout from "../components/layout"
import SegmentBanner from "../components/SegmentBanner"
import SegmentContent from "../components/SegmentContent"
import {Container, Row, Col} from "react-bootstrap"

const businessSegementPage = () => (
  
  <Layout>
    <SegmentBanner/>
    <SegmentContent/>
    
  </Layout>
)

export default businessSegementPage