import React from "react"
import loadable from '@loadable/component'

const Topbar = loadable(() => import('./Topbar'))
const HeaderMiddle = loadable(() => import('./HeaderMiddle'))
const Navbar = loadable(() => import('./Navbar'))




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
