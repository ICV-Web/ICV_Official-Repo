import React from 'react'
import {Container} from 'react-bootstrap'
import { FaRegEnvelope,FaPhoneAlt } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby"


const Headermiddledata = graphql`
 {
      allContentfulHeader {
        nodes {
          emailHeading
          addEmail
          supportHeading
          supportNumber
        }
      }
}
`

const Headermiddle = () => {

    const data = useStaticQuery(Headermiddledata);
    

    return (
        <>
           <div className="topbar-logo">
                <Container>
                    <div className="contact-info">
                        <div className="box-icon-1">
                            <div className="icon">
                                <FaRegEnvelope/>
                            </div>
                            <div className="body-content">
                                <div className="heading">{data.allContentfulHeader.nodes[0].emailHeading}</div>
                                {data.allContentfulHeader.nodes[0].addEmail}
                            </div>
                        </div>
                        
                        <div className="box-icon-1">
                            <div className="icon">
                                <FaPhoneAlt/>
                            </div>
                            <div className="body-content">
                                <div className="heading">{data.allContentfulHeader.nodes[0].supportHeading}</div>
                                {data.allContentfulHeader.nodes[0].supportNumber}
                            </div>
                        </div>
                    </div>
                </Container>
		</div> 
        </>
    )
}

export default Headermiddle
