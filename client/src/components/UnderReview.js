import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';

class UnderReview extends Component {
    render() {
        // console.log("state", this.props.opps);
        let i = 0;
        this.props.opps.map(opp => {
            if (opp.status === 'pending') {
                return i++;
            }
            return '';
        })

        return (
            <Col sm={4} className="kpiBlock teacup">
                <h3>Opportunities Under Review</h3>
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

export default connect(mapStateToProps, null)(UnderReview);