import React from 'react'
import Layout from '../components/layout'
import {Container,Row,Col} from "react-bootstrap"


const imprints = () => {


    return (
        <>
            <Layout>
                <div className="section why">
                    <Container>
                        <Row>
                            <Col sm={12} md={12}>
                                <div className="box-partner">
                                    <div class="item">
                                    <div class="box-image">
                                        <div class="client-img">
                                            
                                        </div>
                                    </div>
                                    <div class="box-info">
                                        <p>Please note that your use of our website constitutes your unconditional agreement to follow and be bound by these Terms of Use. Everything you see or read on this website is copyrighted unless otherwise noted and may not be used without the written permission of ICV except as provided in these Terms of Use or in the text on the site.</p>
                                        <p>ICV reserves the right to update or modify these Terms of Use at any time without prior notice. Your use of the ICV website following any such change constitutes your unconditional agreement to follow and be bound by these Terms of Use as amended. For this reason, we encourage you to review these Terms of Use whenever you use this website. Copyrights, trademarks and trade names contained herein are registered or applied for in multiple countries.</p>
                                        <p>Except for personal, non-commercial internal use, you are prohibited from using any of the materials and documents shown without obtaining ICV’s prior written permission. This prohibition includes, without limitation, copying, distributing, modifying, reproducing in whole or in part, uploading, transmitting, licensing, selling and publishing.</p>
                                    </div>
                                    </div>                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
        </>
        )
}



export default imprints


