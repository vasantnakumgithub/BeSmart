import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Blog.css';
import Blog_1 from '../../Components/Assets/Blog/Blog_1.jpg';
import Blog_2 from '../../Components/Assets/Blog/Blog_2.jpg';
import Blog_3 from '../../Components/Assets/Blog/Blog_3.jpg';
const Blog = () => {
    return (
        <>
        <section id='Blog'>
            <Container>
                <Row className='text-center mt-5'>
                    <Col lg={{ span: 6, offset: 3 }}>
                        <h2>Our Latest News</h2>
                        <div className='Blog_sec'>
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <p className='m-0'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, by injected humour, or new randomised words.</p>
                    </Col>
                </Row>

                <Row className='justify-content-center'>
                    <Col xl='3' md='4' sm='8' className='mt-5'>
                        <Card >
                            <Card.Img variant="top" src={Blog_1} />
                            <Card.Body>
                                <Card.Title>Affinity Designer Quick Start</Card.Title>
                                <div className='card_paragraph'>
                                    <p><i class="bi bi-person-fill"></i> paul smith</p>
                                    <div className='Blog_line'></div>
                                    <p><i class="bi bi-tags-fill"></i> Wordpress</p>
                                </div>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='bg-info border-0 px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl='3' md='4' sm='8' className='mt-5'>
                        <Card >
                            <Card.Img variant="top" src={Blog_3} />
                            <Card.Body>
                                <Card.Title>Solid HTML Form Structure</Card.Title>
                                <div className='card_paragraph'>
                                    <p><i class="bi bi-person-fill"></i> paul smith</p>
                                    <div className='Blog_line'></div>
                                    <p><i class="bi bi-tags-fill"></i> Wordpress</p>
                                </div>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='bg-info border-0 px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl='3' md='4' sm='8' className='mt-5'>
                        <Card >
                            <Card.Img variant="top" src={Blog_2} />
                            <Card.Body>
                                <Card.Title>New WordPress Theme</Card.Title>
                                <div className='card_paragraph'>
                                    <p><i class="bi bi-person-fill"></i> paul smith</p>
                                    <div className='Blog_line'></div>
                                    <p><i class="bi bi-tags-fill"></i> Wordpress</p>
                                </div>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button className='bg-info border-0 px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <section className='Blog_section mt-5'>
                <Container>
                    <Row className='row justify-content-center d-flex align-items-center'>
                        <Col lg='5' md='10'>
                            <div className='d-flex justify-content-lg-between justify-content-center align-items-center '>
                                <div className='blog_circle_img'></div>
                                <div className='ms-3'>
                                    <h3 className='mb-0'>ALICIA STEVENSON</h3>
                                    <p className='mb-0'>Founder Freelancer</p>
                                </div>
                                <div className='BLog_line'></div>
                            </div>
                        </Col>


                        <Col lg='5' md='10' >
                            <p className='blog_lorem'>
                                Your time is limited, so do not waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking."</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row className='my-5 justify-content-center'>
                        <Col lg='5'>
                            <iframe src="https://player.vimeo.com/video/69988283?h=374ede24b7" width="100%" height="300" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                        <Col lg='6' className='video_text'>
                            <h2>Watch the video presentation.</h2>
                            <p>
                                Watch the video presentation.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui ipsum quiaim netsum. Consequuntur sequimagni.</p>
                            <p>Consequuntur magni netsum es qui ratione sequi nesciunt. Neque vetim quisquat, quia voluptas quistri ipsum quiaim magni eti ratione.</p>
                            <button>Discover More</button>
                        </Col>
                    </Row>
                </Container>
            </section>
            </section>
        </>
    );
}
export default Blog;