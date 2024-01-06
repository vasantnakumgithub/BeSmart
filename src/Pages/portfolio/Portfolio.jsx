import React from 'react';
import './Portfolio.css';
import { Container, Row, Col } from 'react-bootstrap'
import portfolio from '../../Components/Assets/portfolio/portfolio_1.jpg';
import portfolio_1 from '../../Components/Assets/portfolio/portfolio_2.jpg';
import portfolio_2 from '../../Components/Assets/portfolio/portfolio_3.jpg';
import portfolio_3 from '../../Components/Assets/portfolio/portfolio_4.jpg';
import portfolio_4 from '../../Components/Assets/portfolio/portfolio_5.jpg';
import portfolio_5 from '../../Components/Assets/portfolio/portfolio_6.jpg';

const Portfolio = () => {
    return (
        <>
            <section id='Portfolio'>
                <Container>
                    <Row>
                        <Col lg={{span:6, offset:3}} className='text-center mt-5'>
                            <h2>Our Latest Work</h2>
                            <div className='features_icon'>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration, by injected humour, or new randomised words.</p>
                        </Col>
                    </Row>
                    <Row>
                        {/* <div className='gallery'> */}
                        <Col lg={4} sm={6} className='mt-4'>
                            <a href="">
                                <img className='img-fluid' src={portfolio} alt="" />
                            </a>
                        </Col>
                        <Col lg={4} sm={6} className='mt-4'>
                            <a href="">
                                <img className='img-fluid' src={portfolio_1} alt="" />
                            </a>
                        </Col>
                        <Col lg={4} sm={6} className='mt-4'>
                            <a href="">
                                <img className='img-fluid' src={portfolio_2} alt="" />
                            </a>
                        </Col>
                        <Col lg={4} sm={6} className='mt-4'>
                            <a href="">
                                <img className='img-fluid' src={portfolio_3} alt="" />
                            </a>
                        </Col>
                        <Col lg={4} sm={6} className='mt-4'>
                            <a href="">
                                <img className='img-fluid' src={portfolio_4} alt="" />
                            </a>
                        </Col>
                        <Col lg={4} sm={6} className='mt-4'>
                            <a href="">
                                <img className='img-fluid' src={portfolio_5} alt="" />
                            </a>
                        </Col>
                        {/* </div> */}
                    </Row>
                </Container>
            </section>



        </>
    );
}
export default Portfolio;