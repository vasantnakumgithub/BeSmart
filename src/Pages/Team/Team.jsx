import React from 'react';
import './Team.css';
import { Container, Row, Col} from 'react-bootstrap';
import icon_1 from '../../Components/Assets/Team/icon_1.png';
import icon_2 from '../../Components/Assets/Team/icon_2.png';
import icon_3 from '../../Components/Assets/Team/icon_3.png';
import icon_4 from '../../Components/Assets/Team/icon_4.png';
import icon_5 from '../../Components/Assets/Team/icon_5.png';
import icon_6 from '../../Components/Assets/Team/icon_6.png';
import Amazing from '../../Components/Assets/Team/Amazing.png';

// import team from '../../Components/Assets/Team/team_1.jpg';
// import team_1 from '../../Components/Assets/Team/team_2.jpg';
// import team_2 from '../../Components/Assets/Team/team_3.jpg';
const Team = () => {
    return (
        <>
            <section id='Team'>
                <Container>
                    <Row className='text-center'>
                        <Col lg={{ span: 8, offset: 2 }} className='px-5'>
                            <h2>Meet Our Amazing Team</h2>
                            <div className='Team_icon'>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, by injected humour, or new randomised words.</p>
                        </Col>
                    </Row>
                </Container>
            </section>


            {/* ControlledCarousel file */}
            {/* <section>
                <Container>
                    <Row>
                        <Carousel data-bs-theme="dark">
                            <Carousel.Item>
                                <Col lg='12'>
                                    <Row>
                                        <Col md='4'>
                                            <div className='carousel_text'>
                                                <img src={team} alt="" />
                                                <div>
                                                    <h2>JOANNA HAWKINS</h2>
                                                    <p>Graphic Designer</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md='4'>
                                            <div className='carousel_text'>
                                                <img src={team_1} alt="" />
                                                <div>
                                                    <h2>JOANNA HAWKINS</h2>
                                                    <p>Graphic Designer</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md='4'>
                                            <div className='carousel_text'>
                                                <img src={team_2} alt="" />
                                                <div>
                                                    <h2>JOANNA HAWKINS</h2>
                                                    <p>Graphic Designer</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Col lg='12'>
                                    <Row>
                                        <Col md='4'>
                                            <div className='carousel_text'>
                                                <img src={team_2} alt="" />
                                                <div>
                                                    <h2>JOANNA HAWKINS</h2>
                                                    <p>Graphic Designer</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md='4'>
                                            <div className='carousel_text'>
                                                <img src={team} alt="" />
                                                <div>
                                                    <h2>JOANNA HAWKINS</h2>
                                                    <p>Graphic Designer</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md='4'>
                                            <div className='carousel_text'>
                                                <img src={team_1} alt="" />
                                                <div>
                                                    <h2>JOANNA HAWKINS</h2>
                                                    <p>Graphic Designer</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Col lg='12'>
                                    <Row>
                                        <Col md='4'>
                                            <div className='carousel_text'>
                                                <img src={team_1} alt="" />
                                                <div>
                                                    <h2>JOANNA HAWKINS</h2>
                                                    <p>Graphic Designer</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md='4'>
                                            <div className='carousel_text'>
                                                <img src={team_2} alt="" />
                                                <div>
                                                    <h2>JOANNA HAWKINS</h2>
                                                    <p>Graphic Designer</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md='4'>
                                            <div className='carousel_text'>
                                                <img src={team} alt="" />
                                                <div>
                                                    <h2>JOANNA HAWKINS</h2>
                                                    <p>Graphic Designer</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Carousel.Item>
                        </Carousel >
                    </Row >
                </Container >
            </section > */}


            {/* Team_Amazing */}

            <section section className='Team_Amazing' >
                <Container>
                    <Row>
                        <Col lg={{ span: 6, offset: 3 }} className='text-center mb-5'>
                            <h2>Amazing Services</h2>
                            <div className='Team_line'>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, by injected humour, or new randomised words.</p>
                        </Col>
                    </Row>

                    <img src={Amazing} alt="" />
                    <div className='Amazing_text_sec'>
                        <Row>
                            <Col lg='4' md='6'>
                                <div className='icon_sec'>
                                    <img src={icon_1} className='img-fluid img_icon' alt="" />
                                    <div className='Amazing_text'>
                                        <h5>Top-Notch Design</h5>
                                        <p>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className='icon_sec'>
                                    <img src={icon_2} className='img-fluid img_icon' alt="" />
                                    <div className='Amazing_text'>
                                        <h5>Top-Notch Design</h5>
                                        <p>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className='icon_sec'>
                                    <img src={icon_3} className='img-fluid img_icon' alt="" />
                                    <div className='Amazing_text'>
                                        <h5>Top-Notch Design</h5>
                                        <p>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className='icon_sec'>
                                    <img src={icon_4} className='img-fluid img_icon' alt="" />
                                    <div className='Amazing_text'>
                                        <h5>Top-Notch Design</h5>
                                        <p>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className='icon_sec'>
                                    <img src={icon_5} className='img-fluid img_icon' alt="" />
                                    <div className='Amazing_text'>
                                        <h5>Top-Notch Design</h5>
                                        <p>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className='icon_sec'>
                                    <img src={icon_6} className='img-fluid img_icon' alt="" />
                                    <div className='Amazing_text'>
                                        <h5>Top-Notch Design</h5>
                                        <p>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

            </section>
            <div className='parallax_photo'>
                <div className='parallax_bgcolor'>
                    <div className='text'>
                        <h1>Seen enough? Let's get started.</h1>
                        <p>No Fixed Contract. No Installation Required. Trusted & Secure.</p>
                        <button>TRY IT FOR FREE</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Team;
