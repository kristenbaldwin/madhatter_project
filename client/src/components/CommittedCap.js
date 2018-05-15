import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class CommittedCap extends Component {
    render() {
        return (
            <Col sm={6} className="kpiBlock">
                <h2>Total Capital Committed</h2>
                <p className="helperText">To all opportunities</p>
                <p>$50,000</p>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, null)(CommittedCap);
