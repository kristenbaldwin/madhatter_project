import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
// import { connect } from "react-redux";
import UnderReview from './UnderReview';
import Approved from './Approved';
import DurationReview from './DurationReview';
import RequestedCap from './RequestedCap';
import CommittedCap from './CommittedCap';
import GraphApproved from './GraphApproved';
import AllOpps from './AllOpps';
import '../styles/MainDash.css';

class MainDash extends Component {
    render() {
        return (
            <Grid className="kpis">
                <Row className="kpisRow">
                    <UnderReview />
                    <Approved />
                    <DurationReview />
                </Row>
                <Row className="kpisRow">
                    <RequestedCap />
                    <CommittedCap />
                </Row> 
                <Row className="kpisRow">
                    <GraphApproved />
                </Row>
                <Row className="kpisRow">
                    <AllOpps />
                </Row>
            </Grid>
        )
    }
}

export default MainDash;