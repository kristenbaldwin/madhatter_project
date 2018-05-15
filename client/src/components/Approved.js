import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class Approved extends Component {
    render() {
        return (
            <Col sm={4} className="kpiBlock">
                <h2>Opportunities Approved</h2>
                <p>2</p>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, null)(Approved);