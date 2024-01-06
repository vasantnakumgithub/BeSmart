import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Hero.css';
import icon from '../Assets/hero/icon.png';
import icon_1 from '../Assets/hero/icon_1.png';
import icon_3 from '../Assets/hero/icon_2.png';

import partner_1 from '../Assets/hero/partner_1.png';
import partner_2 from '../Assets/hero/partner_2.png';
import partner_3 from '../Assets/hero/partner_3.png';
import partner_4 from '../Assets/hero/partner_4.png';
import partner_5 from '../Assets/hero/partner_5.png';


/*===================================
                HERO - 1.0
===================================*/
import Features from '../../Pages/Features/Features';

/*===================================
                HERO - 2.0
===================================*/
import Portfolio from '../../Pages/portfolio/Portfolio';

/*===================================
                HERO - 3.0
===================================*/
import Register from '../../Pages/Register/Register';

/*===================================
                HERO - 4.0
===================================*/
import Team from '../../Pages/Team/Team';

/*===================================
                HERO - 5.0
===================================*/
import Blog from '../../Pages/Blog/Blog';

/*===================================
                HERO - 6.0
===================================*/
import Services from '../../Pages/Servic/Services';

/*===================================
                HERO - 7.0
===================================*/
import Pricing from '../../Pages/Pricing/Pricing';


const Hero = () => {
    return (
        <>
            <header id='Hero'>
                <div className='bg'>
                    <Container>
                        <Row className='hero_part'>
                            <Col xxl='6' xl='7' lg='8' md='10'>
                                <div className='header_text ps-5'>
                                    <h1 className='animate__animated animate__slideInLeft animate__slow'>Ready To Promote Your New Business With BeSmart?</h1>
                                    <div className='d-flex mt-4 animate__animated animate__slideInLeft animate__slow'>
                                        <img src={icon} alt='icon '></img>
                                        <p className='ps-3'>Tendis tempor ante acu ipsum finibus, et atimus etims urna netsumiteda qui ratione lorem nets et sequi tempor.</p>
                                    </div>
                                    <div className='d-flex mt-4 animate__animated animate__slideInLeft animate__slow'>
                                        <img src={icon_1} alt='icon'></img>
                                        <p className='ps-3'>Tendis tempor ante acu ipsum finibus, et atimus etims urna netsumiteda qui ratione lorem nets et sequi tempor.</p>
                                    </div>
                                    <div className='d-flex mt-4 animate__animated animate__slideInLeft animate__slower'>
                                        <img src={icon_3} alt='icon'></img>
                                        <p className='ps-3'>Tendis tempor ante acu ipsum finibus, et atimus etims urna netsumiteda qui ratione lorem nets et sequi tempor.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='header-photo pb-4'>
                    <span className='partner animate__animated animate__slideInLeft animate__slow'>
                        <img src={partner_1} alt="" />
                    </span>
                    <span className='partner animate__animated animate__slideInLeft animate__slow'>
                        <img src={partner_2} alt="" />
                    </span>
                    <span className='partner animate__animated animate__slideInLeft animate__slow'>
                        <img src={partner_3} alt="" />
                    </span>
                    <span className='partner animate__animated animate__slideInLeft animate__slow'>
                        <img src={partner_4} alt="" />
                    </span>
                    <span className='partner animate__animated animate__slideInLeft animate__slow'>
                        <img src={partner_5} alt="" />
                    </span>

                </div>
            </header >


            <Features />
            <Portfolio />
            <Register />
            <Team />
            <Blog />
            <Services />
            <Pricing />

        </>
    );
}
export default Hero;