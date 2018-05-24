import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TopNav from './TopNav';
import '../styles/Opps.css';

class Opps extends Component {
    render() {
        let opps = this.props.opps.map((opp, i) => {
            let oppPage = "/opps/" + opp.id;
            return (
                <div>
                    <div className="singleOpp">
                        <Link to={oppPage} onClick={() => this.props.onSelect(opp.id)}><img src={require("../images/logo-" + (i + 1) + "-final.jpg")} alt='logo' className="medLogo" /></Link>
                        <h3>{opp.name}</h3>
                        <Link to={oppPage} onClick={() => this.props.onSelect(opp.id)}><Button bsStyle="primary btn-view" onClick={() => this.props.onSelect(opp.id)}>View/Edit</Button></Link>
                    </div>
                    <hr />
                </div>
            )
        })
        return (
            <Grid fluid={true} className="nav-container">
                <TopNav />
                <Grid className="whiteBackground">
                    <Row>
                        <Col xs={12}>
                            <h1>All Opportunities</h1>
                        </Col>
                    </Row>
                    <Row className="allOpps">
                        <Col xs={12}>
                            {opps}
                            {/* <div className="singleOpp">
                            <img src='' alt="opp-logo" />
                            <h4>Opportunity Name</h4>
                            <Link to="/opps/1"><Button bsStyle="primary btn-view" onClick={() => this.props.onSelect(1)}>View/Edit</Button></Link>
                            </div>
                            <hr />
                            <div className="singleOpp">
                            <img src='' alt="opp-logo" />
                            <h4>Opportunity Name</h4>
                            <Link to="/opps/2"><Button bsStyle="primary btn-view" onClick={() => this.props.onSelect(2)}>View/Edit</Button></Link>
                            </div>
                            <hr />
                            <div className="singleOpp">
                            <img src='' alt="opp-logo" />
                            <h4>Opportunity Name</h4>
                            <Link to="/opps/3"><Button bsStyle="primary btn-view" onClick={() => this.props.onSelect(3)}>View/Edit</Button></Link>
                            </div>
                            <hr /> */}
                        </Col>
                    </Row>
                </Grid>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        opps: state.opportunities
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSelect: (id) => dispatch({
            type: "SELECT_OPP",
            id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Opps);