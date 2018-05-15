import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class GraphApproved extends Component {
    render() {
        return (
            <Col xs={12} className="kpiBlock">
                <h2>Approved Opportunities Timeline</h2>
                <p>Insert line chart here</p>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, null)(GraphApproved);