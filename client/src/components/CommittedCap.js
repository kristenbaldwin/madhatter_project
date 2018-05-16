import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class CommittedCap extends Component {
    render() {
        return (
            <Col sm={6} className="kpiBlock">
                <h3>Total Capital Committed</h3>
                <p className="helperText">To all opportunities</p>
                <h3>$50,000</h3>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, null)(CommittedCap);
