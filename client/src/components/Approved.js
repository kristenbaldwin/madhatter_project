import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class Approved extends Component {
    render() {
        return (
            <Col sm={4} className="kpiBlock">
                <h3>Opportunities Approved</h3>
                <h3 className="stat">2</h3>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, null)(Approved);