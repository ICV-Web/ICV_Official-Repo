import React from "react"
import Slider from "./Slider"
import Topbar from './Topbar'
import HeaderMiddle from './HeaderMiddle'
import Navbar from './Navbar'

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
        <Topbar/>
        <HeaderMiddle/>
        <Navbar/>
    </div>
      
  </header>
)



export default Header
