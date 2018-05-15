import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
// import { connect } from "react-redux";
import UnderReview from './UnderReview';
import Approved from './Approved';
import DurationReview from './DurationReview';
import RequestedCap from './RequestCap';
import CommittedCap from './CommittedCap';
import GraphApproved from './GraphApproved';
import AllOpps from './AllOpps';
import '../styles/MainDash.css';

class MainDash extends Component {
    render() {
        return (
            <div className="kpis">
                <Row>
                    <UnderReview />
                    <Approved />
                    <DurationReview />
                </Row>
                <Row>
                    <RequestedCap />
                    <CommittedCap />
                </Row> 
                <Row>
                    <GraphApproved />
                </Row>
                <Row>
                    <AllOpps />
                </Row>
            </div>
        )
    }
}

export default MainDash;