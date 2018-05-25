import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class Scoring extends Component {
    render() {
        let founders = this.props.opps.map((opp) => {
            if (opp.id === this.props.opp_id.id) {
                let score = 0;
                for (var i = 0; i < opp.founders.length; i++) {
                    score += opp.founders[i].answer;
                }
                return score;
            }
            return ''
        })

        let legal = this.props.opps.map((opp) => {
            if (opp.id === this.props.opp_id.id) {
                let score = 0;
                for (var i = 0; i < opp.legals.length; i++) {
                    score += opp.legals[i].answer;
                }
                return score;
            }
            return ''
        })

        let product = this.props.opps.map((opp) => {
            if (opp.id === this.props.opp_id.id) {
                let score = 0;
                for (var i = 0; i < opp.opp_products.length; i++) {
                    score += opp.opp_products[i].answer;
                }
                return score;
            }
            return ''
        })

        let financial = this.props.opps.map((opp) => {
            if (opp.id === this.props.opp_id.id) {
                let score = 0;
                for (var i = 0; i < opp.financials.length; i++) {
                    score += opp.financials[i].answer; 
                }
                return score;
            }
            return ''
        })

        let index = this.props.opp_id.id - 9;
        let overall = founders[index] + legal[index] + product[index] + financial[index];
       
        return (
            <Row>
                <Col sm={12} className="section multiLines">
                    <div className="section-item overallScore">
                        <h4>Overall: </h4>&emsp;
                        <div className="scoreBox">
                            <p>{overall}</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} className="section multiLines">
                    <div className="section-item">
                        <h4>Founders</h4>
                        <div className="scoreBox">
                            <p>{founders}</p>
                        </div>
                    </div>
                    <div className="section-item">
                        <h4>Legal</h4>
                        <div className="scoreBox">
                            <p>{legal}</p>
                        </div>
                    </div>
                    <div className="section-item">
                        <h4>Product</h4>
                        <div className="scoreBox">
                            <p>{product}</p>
                        </div>
                    </div>
                    <div className="section-item">
                        <h4>Financial</h4>
                        <div className="scoreBox">
                            <p>{financial}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state) {
    return {
        opp_id: state.opp_id,
        opps: state.opportunities
    }
}

export default connect(mapStateToProps, null)(Scoring);