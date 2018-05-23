import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import Background from './Background';
import Scoring from './Scoring';
import NextSteps from './NextSteps';
import AssessmentModal from '../containers/assessment_modal';
import TopNav from './TopNav';
// import { connect } from 'react-redux';
import '../styles/OneOpp.css';

class OneOpp extends Component {
    constructor(props){
        super(props)
        this.launchModal = this.launchModal.bind(this)
    }

launchModal(e){
    e.preventDefault();
    <AssessmentModal />
}

    render() {
        return (
            <Grid fluid={true} className="nav-container">
                <TopNav />
                <Grid className="whiteBackground">
                    <Row className="flex">
                        <Col xs={12} className="section">
                            <img src='' alt='logo' className="section-logo" />
                            <h1 className="section-name">Opportunity Name</h1>
                            <AssessmentModal text="Create Assessment" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="section multiLines">
                            <div className="section-item">
                                <h4>Status</h4>
                                <p>Pending</p>
                            </div>
                            <div className="section-item">
                                <h4>Entered By</h4>
                                <p>Username<br />
                                Date</p>
                            </div>
                            <div className="section-item">
                                <h4>Approved By</h4>
                                <p>Username<br />
                                Date</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="separator">
                        <Col xs={12} className="section withBtn">
                            <h2>Background</h2>
                            <AssessmentModal text="Edit" bsStyle="primary" className="btn-view">Edit</AssessmentModal>
                        </Col>
                    </Row>
                    <Background />
                    <Row className="separator">
                        <Col xs={12} className="section withBtn">
                            <h2>Scoring</h2>
                            <AssessmentModal text="Edit" bsStyle="primary" className="btn-view"></AssessmentModal>
                        </Col>
                    </Row>
                    <Scoring />
                    <Row className="separator">
                        <Col xs={12} className="section withBtn">
                            <h2>Next Steps</h2>
                            <Button bsStyle="primary" className="btn-view">Edit</Button>
                        </Col>
                    </Row>
                    <NextSteps />
                </Grid>
            </Grid>
        )
    }
}

export default OneOpp;