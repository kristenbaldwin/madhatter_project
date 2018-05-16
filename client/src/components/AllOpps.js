import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from "react-redux";
// import { loadDash } from '../actions/loadDash';
import '../styles/MainDash.css';

class AllOpps extends Component {
    // componentDidMount() {
    //     this.props.onDashLoad()
    // }

    render() {
        // let allOpps =
        return (
            <Col xs={5} className="kpiBlock">
                <h3>All Opportunities</h3>
                <Row>
                    <Col>
                        {/* Map through all Opportunities table entries */}
                    </Col>
                </Row>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         onDashLoad: () => dispatch(loadDash())
//     }
// }

export default connect(mapStateToProps, null)(AllOpps);