import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { Link } from "gatsby"


const corepageContent = () => {
    return (
        <>
        <div className="section why">
            <Container className="Padding-40">
                <Row>
                    <Col md={12} sm={12}>
                        <div className="box-partner">
                            <div className="item">
                                <div className="box-info">
                                    <h3>What we do:</h3>
                                    <p>In a world full of choices, we bring you the finest chemicals for your processes, helping you shape better lives for a promising future. Our creative minds are constantly experimenting and researching, co-producing the building blocks for synthesis across multiple industries. This helps us maintain the art of diversity in our products together with making them fit your needs.</p>
                                    <p>This subliminal art of harnessing innovation will surely pave the way for future!<br/>Ever wondered what’s your way forward? It’s Chem-ovative!</p>
                                    <div class="what-wrap">
                                        <h3>Who we are:</h3>
                                        <p>We are co-producers of chemical raw materials, to be utilized by many industries worldwide. Our portfolio of products includes chemicals for pharmaceuticals, food &amp; FCC, performance chemicals and specialty chemicals. We take care of our clients through a wide network of subsidiary regional offices in Europe, Middle East-Africa region and the Far East followed by our headquarters in Hamburg Germany, in doing so we strategically harness towards sustainability. </p>
                                    </div>
                                    <div class="ensure-wrap">
                                        <h3>What we ensure</h3>
                                        <p>To never compromise on the quality of chemicals we provide. We rigidly follow our product quality guideline at each step of our supply chain to make sure that provided chemicals are of extremely high quality, provided in the most efficient manner.</p>
                                    </div>
                                    <div class="vis-wrap">
                                        <h3>Vision</h3>
                                        <p>“To develop sustainable ecosystems through innovative chemistry”</p>
                                    </div>
                                    <div class="mis-wrap">
                                        <h3>Mission</h3>
                                        <p>“To lead the industry towards utilization of innovative chemistry”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default corepageContent