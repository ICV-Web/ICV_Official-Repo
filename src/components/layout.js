import React from "react"
import loadable from '@loadable/component'
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/style.css"
const Header = loadable(() => import('./header'))
const Footer = loadable(() => import('./Footer'))


const layout = ({children}) => {
    return (
        <>
          <Header/>
            <main>
                {children}
            </main>
          <Footer/>
        </>
    )
}

export default layout