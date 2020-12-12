import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/style.css"
import Header from "./header"
import Footer from "./Footer"

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