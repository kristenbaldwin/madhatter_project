import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import '../styles/MainDash.css';

class AddOpp extends Component {
    render() {
        return (
            <Col xs={12}>
                <Button bsStyle="primary">Create New Opportunity</Button>
            </Col>
        )
    }
}

export default AddOpp;