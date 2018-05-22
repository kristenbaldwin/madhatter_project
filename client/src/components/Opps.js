import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../styles/Opps.css';

class Opps extends Component {
    render() {
        return (
            <Grid className="whiteBackground">
                <Row>
                    <Col xs={12}>
                        <h1>All Opportunities</h1>
                    </Col>
                </Row>
                <Row className="allOpps">
                    {/* Map through all opps in opportunities table */}
                    <Col xs={12}>
                        <div className="singleOpp">
                           <img src='' alt="opp-logo" />
                           <h4>Opportunity Name</h4>
                           <Button bsStyle="primary btn-view" onClick={() => this.props.onSelect(1)}>View/Edit</Button>
                        </div>
                        <hr />
                        <div className="singleOpp">
                           <img src='' alt="opp-logo" />
                           <h4>Opportunity Name</h4>
                           <Button bsStyle="primary btn-view" onClick={() => this.props.onSelect(2)}>View/Edit</Button>
                        </div>
                        <hr />
                        <div className="singleOpp">
                           <img src='' alt="opp-logo" />
                           <h4>Opportunity Name</h4>
                           <Button bsStyle="primary btn-view" onClick={() => this.props.onSelect(3)}>View/Edit</Button>
                        </div>
                        <hr />
                    </Col>
                </Row>
            </Grid>
        )
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

export default connect(null, mapDispatchToProps)(Opps);