import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class GraphApproved extends Component {
    render() {
        return (
            <Col xs={7} className="kpiBlock">
                <h3>Approved Opportunities Timeline</h3>
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