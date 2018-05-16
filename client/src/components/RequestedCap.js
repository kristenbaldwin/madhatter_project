import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class RequestedCap extends Component {
    render() {
        return (
            <Col sm={6} className="kpiBlock">
                <h3>Total Requested Capital</h3>
                <p className="helperText">From active portfolio</p>
                <h3 className="stat">$10,000</h3>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, null)(RequestedCap);