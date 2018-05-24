import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import '../styles/MainDash.css';

class AllOpps extends Component {
    render() {
        let opps = this.props.opps.map((opp, i) => {
            let oppPage = "/opps/" + opp.id;
            return (
                <div>
                    <div>
                        <Link to={oppPage} onClick={() => this.props.onSelect(opp.id)}><img src={require("../images/logo-" + (i + 1) + "-final.jpg")} alt='logo' className="smallLogo" /></Link>
                    </div>
                    <div>
                        <p>{opp.name}</p>
                    </div>
                </div>
            )
        })

        return (
            <Col xs={5} className="kpiBlock">
                <h3>All Opportunities</h3>
                <Row>
                    <Col className="displayOpp">
                        {opps}
                    </Col>
                </Row>
            </Col>
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
            id: id   
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllOpps);