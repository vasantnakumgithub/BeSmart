import React from 'react';
import './Pricing.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
const Pricing = () => {
    return (
        <>
            <section>
                <Container id='Pricing'>
                    <Row>
                        <Col lg={{ span: 6, offset: 3 }} className='text-center mt-5'>
                            <h2>Choose Your Pricing Plan</h2>
                            <div className='pricing_line'>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, by injected humour, or new randomised words.</p>
                        </Col>
                    </Row>


                    <Row className='justify-content-center mb-5'>
                        <Col xl='3' md='4' sm='8' className='mt-5'>
                            <Card className='pricing_card text-center'>
                                <div className='heading'>
                                    <h3 className='pt-4'>STARTER</h3>
                                    <p>$ <span className='pricing'>99</span>p/month</p>
                                    <hr />
                                </div>
                                <Card.Body className='card_body'>
                                    <p>1 GB of space</p>
                                    <p>200 messages</p>
                                    <p>unlimited updates</p>
                                    <p>1 user acounts</p>
                                    <p>2 databases</p>
                                    <button className='mt-4 register-btn'>REGISTER TODAY</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl='3' md='4' sm='8' className='mt-5'>
                            <Card className='pricing_card text-center'>
                                <div className='heading'>
                                    <h3 className='pt-4'>ADVANCED</h3>
                                    <p>$ <span className='pricing'>199</span>p/month</p>
                                    <hr />
                                </div>
                                <Card.Body className='card_body'>
                                    <p>1.5 GB of space</p>
                                    <p>100 messages</p>
                                    <p>unlimited updates</p>
                                    <p>1 user acounts</p>
                                    <p>2 databases</p>
                                    <button className='mt-4'>REGISTER TODAY</button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl='3' md='4' sm='8' className='mt-5'>
                            <Card className='pricing_card text-center'>
                                <div className='heading'>
                                    <h3 className='pt-4'>INTERMEDIATE</h3>
                                    <p>$ <span className='pricing'>299</span>p/month</p>
                                    <hr />
                                </div>
                                <Card.Body className='card_body'>
                                    <p>2 GB of space</p>
                                    <p>100 messages</p>
                                    <p>unlimited updates</p>
                                    <p>1 user acounts</p>
                                    <p>2 databases</p>
                                    <button className='mt-4 register-btn'>REGISTER TODAY</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>



            {/* CONTACT SECTION  */}
            <section className='contact'>
                <Container>
                    <Row>
                        <Col lg={{ span: 6, offset: 3 }} className='text-center py-5'>
                            <h2>Get In Touch</h2>
                            <div className='contact_line'>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, by injected humour, or new randomised words.</p>
                        </Col>
                    </Row>

                    <Row className='justify-content-center contact_sec'>
                        <Col lg='8'>
                            <Row>
                                <Col sm='6'>
                                    <input type="text" placeholder='Full Name*' />
                                </Col>
                                <Col sm='6'>
                                    <input type="text" placeholder='Email Address*' />
                                </Col>
                            </Row>
                        </Col>

                        <Col lg='8'>
                            <Row>
                                <Col sm='6'>
                                    <input type="text" placeholder='Subject*' />
                                </Col>
                                <Col sm='6'>
                                    <input type="text" placeholder='Phone Number*' />
                                </Col>
                            </Row>
                        </Col>



                        <Col lg='8' className='mb-5'>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px',background:'rgba(0,0,0,0)',color:'white'}}></textarea>
                                <label for="floatingTextarea2">Comments</label>
                            </div>
                            <button className='contact_btn'>SEND MESSAGES</button>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className='contact_footer'>
                <h1><span>Bé </span>Smart</h1>
                <div>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-pinterest"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-skype"></i>
                </div>
            </section>
        </>
    );
}
export default Pricing;