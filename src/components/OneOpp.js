import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Background from './Background';
import Scoring from './Scoring';
import NextSteps from './NextSteps';
import AssessmentModal from '../containers/assessment_modal';
import TopNav from './TopNav';
import { connect } from 'react-redux';
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
        let oppInfo_1 = this.props.opps.map((opp) => {
            if (opp.id === this.props.opp_id.id && this.props.opp_id.id === 9) {
                return (
                    <Col xs={8} className="section">
                        <img src={require("../images/logo-1-final.jpg")} alt='logo' className="section-logo" />
                        <h1 className="section-name">{opp.name}</h1>
                    </Col>
                )
            } else if (opp.id === this.props.opp_id.id && this.props.opp_id.id === 10) {
                return (
                    <Col xs={8} className="section">
                        <img src={require("../images/logo-2-final.jpg")} alt='logo' className="section-logo" />
                        <h1 className="section-name">{opp.name}</h1>
                    </Col>
                )
            } else if (opp.id === this.props.opp_id.id && this.props.opp_id.id === 11) {
                return (
                    <Col xs={8} className="section">
                        <img src={require("../images/logo-3-final.jpg")} alt='logo' className="section-logo" />
                        <h1 className="section-name">{opp.name}</h1>
                    </Col>
                )
            }
            return ''
        })

        let oppInfo_2 = this.props.opps.map((opp) => {
            if (opp.approved_by === null) {
                opp.approved_by = "N/A";
            }
            if (opp.id === this.props.opp_id.id) {
                return (
                    <Col xs={12} className="section multiLines">
                        <div className="section-item">
                            <h4>Status</h4>
                            <p>Pending</p>
                        </div>
                        <div className="section-item">
                            <h4>Entered By</h4>
                            <p>{opp.created_by}<br />
                            Date</p>
                        </div>
                        <div className="section-item">
                            <h4>Approved By</h4>
                            <p>{opp.approved_by}<br />
                            Date</p>
                        </div>
                    </Col>
                )
            }
            return ''
        })

        return (
            <Grid fluid={true} className="nav-container">
                <TopNav />
                <Grid className="whiteBackground">
                    <Row className="flex">
                    {oppInfo_1}
                        {/* <Col xs={8} className="section">
                            <img src='' alt='logo' className="section-logo" />
                            <h1 className="section-name">Opportunity Name</h1>
                        </Col> */}
                        <AssessmentModal text="Create Assessment" className="assessModal" colName="modalRow col-xs-4" />
                    </Row>
                    <Row>
                        {oppInfo_2}
                        {/* <Col xs={12} className="section multiLines">
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
                        </Col> */}
                    </Row>
                    <Row className="separator">
                        <Col xs={12} className="section withBtn">
                            <h2>Background</h2>
                            <AssessmentModal text="Edit" bsStyle="primary" className="btn-view" colName="section col-xs-1">Edit</AssessmentModal>
                        </Col>
                    </Row>
                    <Background />
                    <Row className="separator">
                        <Col xs={12} className="section withBtn">
                            <h2>Scoring</h2>
                            <AssessmentModal text="Edit" bsStyle="primary" className="btn-view" colName="section col-xs-1"></AssessmentModal>
                        </Col>
                    </Row>
                    <Scoring />
                    <Row className="separator">
                        <Col xs={12} className="section withBtn">
                            <h2>Next Steps</h2>
                            <AssessmentModal text="Edit" bsStyle="primary" className="btn-view" colName="section col-xs-1"></AssessmentModal>
                        </Col>
                    </Row>
                    <NextSteps />
                </Grid>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        opp_id: state.opp_id,
        opps: state.opportunities
    }
}

export default connect(mapStateToProps, null)(OneOpp);