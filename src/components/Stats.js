import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import statbannerimg from '../images/bgoverlay-1.jpg'
import CountUp from 'react-countup';


const Stats = () => {




const getstats = useStaticQuery(graphql`
   {
    allContentfulStatistics {
      nodes {
        number
        title
      }
    }
    allContentfulHomePageBackgroundImages {
      nodes {
        statisticsSectionImage {
          fluid {
            src
          }
        }
      }
    }
  }
`)

const { allContentfulStatistics: {nodes: Statistics}, } = getstats



    return (
        <>
           	<div className="section statistic bgsection"  style={{ backgroundImage:   `url(${statbannerimg})`  }}>
		<Container>
			<Row>


              {Statistics.map((allstats) => {

                return(
                <Col sm={3} md={3}>
					<div className="counter-1">
			            <div className="counter-number">
                    <CountUp end={allstats.number} duration={10}   />
			            </div>
			            <div className="counter-title">Offices<br/> {allstats.title} </div>
		          	</div>
				</Col>

                )

              })}
				
				
				
			</Row>
		</Container>
	</div> 
 
        </>
    )
}

export default Stats
