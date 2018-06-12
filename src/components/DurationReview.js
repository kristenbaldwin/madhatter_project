import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class DurationReview extends Component {
    render() {
        return (
            <Col sm={4} className="kpiBlock">
                <h3>Average Review Duration</h3>
                <h3 className="stat">7 days</h3>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, null)(DurationReview);