import React from 'react';
import './Services.css';
import {Container, Row, Col} from 'react-bootstrap';
import services from '../../Components/Assets/servic/Services.png';
const Services = () => {
return(
    <>
        <section id='Services' className='services py-5'>
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col lg='6'>
                        <h2>Design & style should always work toward making you feel good.</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et poris ratione sequi enim ipsam voluptatem quia volupti tempor ante netsum quia magni.</p>
                        <ul>
                            <li>Netsum est, qui ipsum quiaim netsum sequi net tempor.</li>
                            <li>Etiam tempor ante acu ipsum finibus, atimus urnas.</li>
                            <li>Atimus urnas netsudat, qui ipsum quiaim netsum.</li>
                            <li>Etiam tempor ante acum ipsum et finibus.</li>
                            <button>Discover More</button>
                        </ul>
                    </Col>

                    <Col lg='5'>
                        <img src={services} className='img-fluid' alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
);
}
export default Services;