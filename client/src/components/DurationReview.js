import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class DurationReview extends Component {
    render() {
        return (
            <Col sm={4} className="kpiBlock">
                <h2>Average Review Duration</h2>
                <p>7 days</p>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, null)(DurationReview);