import React from 'react';
import './Features.css';
import { Container, Row, Col } from 'react-bootstrap';

import icon from '../../Components/Assets/Features/icon.png';
import icon_1 from '../../Components/Assets/Features/icon_1.png';
import icon_2 from '../../Components/Assets/Features/icon_2.png';

import design from '../../Components/Assets/Features/design.jpg';

import icon_3 from '../../Components/Assets/Features/icon_3.png';
import icon_4 from '../../Components/Assets/Features/icon_4.png';
import icon_5 from '../../Components/Assets/Features/icon_5.png';
import icon_6 from '../../Components/Assets/Features/icon_6.png';
import icon_7 from '../../Components/Assets/Features/icon_7.png';

const mockData = [
    {
        image: icon,
        title: 'Fully Customizable',
        paragraph: `Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.`
    },
    {
        image: icon_1,
        title: 'Responsive Design',
        paragraph: `Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.`
    },
    {
        image: icon_2,
        title: 'SEO Ready Code',
        paragraph: `Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.`
    }
]

const parallax_Data = [
    {
        image: icon_3,
        title: '1050+',
        paragraph: `Projects Completed`
    },
    {
        image: icon_4,
        title: '217k',
        paragraph: `Happy Clients`
    },
    {
        image: icon_5,
        title: '1210',
        paragraph: `Design Awards`
    },
    {
        image: icon_6,
        title: '2137',
        paragraph: `Cups Of Coffee`
    },
    {
        image: icon_7,
        title: '24/7+',
        paragraph: `Fast Support`
    },

]

const Features = () => {
    return (
        <>
            <section id='Features' className='features'>
                <Container>
                    <Row>
                        <Col lg={{ span: 6, offset: 3 }} className='text-center mt-5'>
                            <h1>Amazing Features</h1>
                            <div className='features_icon'>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p className='px-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, by injected humour, or new randomised words.</p>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className='justify-content-center'>
                        {mockData.map((cardData, index) => (
                            <Col className='mt-4' md={6} lg={4} key={index}>
                                <div className='features_card'>
                                    <div className='features_icon_img'>
                                        <img className='img-fluid' src={cardData.image} alt="" />
                                    </div>
                                    <h4 className='my-2'>{cardData.title}</h4>
                                    <p className='px-xl-4'>{cardData.paragraph}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <div className='features_design mt-5'>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col lg={{ span: 5 }}>
                                <img src={design} alt="" />
                            </Col>
                            <Col lg={{ span: 6 }} className='text'>
                                <h2>Design & style should always work toward making you feel good.</h2>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et poris ratione sequi enim ipsam voluptatem quia volupti tempor ante netsum quia magni.</p>
                                <ul>
                                    <li>Netsum est, qui ipsum quiaim netsum sequi net tempor.</li>
                                    <li>Etiam tempor ante acu ipsum finibus, atimus urnas.</li>
                                    <li>Atimus urnas netsudat, qui ipsum quiaim netsum.</li>
                                    <li> Etiam tempor ante acum ipsum et finibus.</li>
                                </ul>
                                <button type='button'> Discover More</button>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='features_parallax'>
                    <div className='bg_color'>
                        <Container>
                            <Row className='justify-content-center text-center row'>
                                {parallax_Data.map((data, i) => (
                                    <Col lg='2' md='4' sm='4'  key={i} className='icon_sec'>
                                        <img className='img-fluid' src={data.image} alt="" />
                                        <h2>{data.title}</h2>
                                        <p>{data.paragraph}</p>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Features;