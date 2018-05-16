import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class UnderReview extends Component {
    render() {
        return (
            <Col sm={4} className="kpiBlock left">
                <h3>Opportunities Under Review</h3>
                <h3>3</h3>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, null)(UnderReview);