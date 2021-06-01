import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import statbannerimg from "../images/bgoverlay-1.jpg"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import { nanoid } from 'nanoid'

const Stats = () => {
  const getstats = useStaticQuery(graphql`
    {
      allContentfulHomePageCounter {
        nodes {
          number
          title
        }
      }
      allContentfulHomePageCounterBackgroundImage {
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

  const {
    allContentfulHomePageCounter: { nodes: Statistics },
  } = getstats

  return (
    <>
      <div
        className="section statistic bgsection"
        style={{ backgroundImage: `url(${statbannerimg})` }}
      >
        <Container>
          <Row>
            {Statistics.map(allstats => {
              return (
                <Col lg={3} sm={6} md={3} key={nanoid()}>
                  <div className="counter-1">
                    <div className="counter-number">
                      <CountUp
                        end={allstats.number}
                        duration={10}
                        redraw={true}
                      >
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </div>
                    <div className="counter-title">
                      Offices
                      <br /> {allstats.title}{" "}
                    </div>
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
