import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class AllOpps extends Component {
    render() {
        // let allOpps =
        return (
            <Col xs={12} className="kpiBlock">
                <h2>All Opportunities</h2>
                <Row>
                    <Col>
                        {/* Map through all Opportunities table entries */}
                    </Col>
                </Row>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllOpps);