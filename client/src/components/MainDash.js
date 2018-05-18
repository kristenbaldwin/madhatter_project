import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import UnderReview from './UnderReview';
import Approved from './Approved';
import DurationReview from './DurationReview';
import RequestedCap from './RequestedCap';
import CommittedCap from './CommittedCap';
import GraphApproved from './GraphApproved';
import AllOpps from './AllOpps';
import OppModal from '../containers/opp_modal';
import '../styles/MainDash.css';

class MainDash extends Component {
    render() {
        return (
            <Grid className="kpis">
                <Row className="addOpp">
                    <OppModal />
                </Row>
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
                    <AllOpps />
                    <GraphApproved />
                </Row>
            </Grid>
        )
    }
}

export default MainDash;