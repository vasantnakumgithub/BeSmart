import React from 'react';
import './Register.css';
import { Row, Col } from 'react-bootstrap';

import register from '../../Components/Assets/Register/register.jpg';
const Register = () => {
    return (
        <>
            <section id='Register' className='my-5'>
                <form action="">
                    <Row>
                        <Col lg={6}>
                            <img src={register} className='img-fluid' alt="" />
                        </Col>
                        <Col lg={5} className='register_input_sec'>

                            <h2>Register Your Attendance Today.</h2>
                            <p>Curabitur quam etsum lacus etsumis nulat iaculis etsum vitae etsum nisle varius loremis sed feugiat ligula aliquam ets vitae dictis netsum et ipsum netsum et quia nihilse etsa illum sedit consequatur quias sit coloris.</p>
                            <Row>
                                <Col md='6'>
                                    <input type="text" placeholder='Full Name*' />
                                    <input type="text" placeholder='Email Address*' />
                                </Col>

                                <Col md='6'>
                                    
                                    <input type="text" placeholder='Phone Number' />
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </Col>
                                <div>
                                <button type='button' className='register_button'> REGISTER NOW</button>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </form>
            </section>
        </>
    );
}
export default Register;