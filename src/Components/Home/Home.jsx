import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import './Home.css'
function Home() {
    return (
        <>

            <Navbar expand="lg">
                <div className='navbar-section'>
                    <Container>
                        <div className='home_sec'>
                            <Navbar.Brand href="/" id='logo'><span>Bé</span>Smart</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="d-flex align-items-center ms-auto Nav_sec">
                                    <Nav.Link className='Nav_link' href="#Hero">HOME</Nav.Link>
                                    <Nav.Link className='Nav_link' href="#Features">FEATURES</Nav.Link>
                                    <Nav.Link className='Nav_link' href="#Portfolio">PORTFOLIO</Nav.Link>
                                    <Nav.Link className='Nav_link' href="#Register">REGISTER</Nav.Link>
                                    <Nav.Link className='Nav_link' href="#Team">TEAM</Nav.Link>
                                    <Nav.Link className='Nav_link' href="#Blog">BLOG</Nav.Link>
                                    <Nav.Link className='Nav_link' href="#Services">SERVICES</Nav.Link>
                                    <Nav.Link className='Nav_link' href="#Pricing">PRICING</Nav.Link>
                                    <button className='Nav_btn'>Contact Us</button>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Container>

                </div>
            </Navbar>
        </>
    );
};
export default Home;