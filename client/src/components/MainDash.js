import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
// import { connect } from "react-redux";
import UnderReview from './UnderReview';
import Approved from './Approved';
import DurationReview from './DurationReview';
import RequestedCap from './RequestCap';
import CommittedCap from './CommittedCap';
import GraphApproved from './GraphApproved';
import AllOpps from './AllOpps';

class MainDash extends Component {
    render() {
        return (
            <div className="kpis">
                <Row>
                    <Col sm={4}>
                        <UnderReview />
                    </Col>
                    <Col sm={4}>
                        <Approved />
                    </Col>
                    <Col sm={4}>
                        <DurationReview />
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <RequestedCap />
                    </Col>
                    <Col sm={6}>
                        <CommittedCap />
                    </Col>
                </Row> 
                <Row>
                    <Col xs={12}>
                        <GraphApproved />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <AllOpps />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MainDash;