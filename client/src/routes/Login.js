import React, { Component} from 'react';
import { Grid, Row, Form, FormGroup, Col, FormControl, Button, CheckBox } from 'react-bootstrap';
import '../styles/login.css';

import Forms from '../components/forms';

class Login extends Component {
    render() {

        return(
            // <div>
            //     <div className='bg'>
            //     </div>
            //     <div className="logo">
            //     <img width={400}  src="https://static1.squarespace.com/static/59959e593e00be6a7ba7fda3/t/5a0e05990d9297da4e05d122/1525281574090/?format=1500w" alt="logo" />
            //     </div>
                
                <Row>
                    <Col className='bg'></Col>
                    <Row className="logo">
                        <img width={400}  src="https://static1.squarespace.com/static/59959e593e00be6a7ba7fda3/t/5a0e05990d9297da4e05d122/1525281574090/?format=1500w" alt="logo" />
                    </Row>
                    <Form className="login" horizontal action="http://localhost:4000/login" method="post">
                        <FormGroup controlId="formHorizontalEmail">
                            <Col sm={4}>
                            </Col>
                            <Col sm={4}>
                            <h1 className="title">Opportunity Dashboard</h1>
                            <FormControl type="text" placeholder="Username" name="username" />
                            </Col>
                            <Col sm={4}>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col sm={4}>
                            </Col>
                            <Col sm={4}>
                            <FormControl type="password" placeholder="Password" name="password" />
                              </Col>
                            <Col sm={4}>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={4} sm={4}>
                            <Button type="submit">Login</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Row>
               
            // </div>
        )
    }
}

export default Login