import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class Approved extends Component {
    render() {
        let i = 0;
        this.props.opps.map(opp => {
            if (opp.status === 'active') {
                return i++;
            }
            return '';
        })
        return (
            <Col sm={4} className="kpiBlock">
                <h3>Opportunities Approved</h3>
                <h3 className="stat">{i}</h3>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        opps: state.opportunities
    }
}

export default connect(mapStateToProps, null)(Approved);