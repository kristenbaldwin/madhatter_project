import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class RequestedCap extends Component {
    render() {
        return (
            <Col sm={6} className="kpiBlock">
                <h2>Total Requested Capital</h2>
                <p className="helperText">From active portfolio</p>
                <p>$10,000</p>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, null)(RequestedCap);