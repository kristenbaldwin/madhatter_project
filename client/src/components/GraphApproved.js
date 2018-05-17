import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from "react-redux";
import '../styles/MainDash.css';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart)

class GraphApproved extends Component {
    render() {
        return (
            <Col xs={7} className="kpiBlock">
                <h3>Approved Opportunities Timeline</h3>
                <p className="helperText">Year-to-date</p>
                <LineChart xtitle="Month" ytitle="Approved Opportunities" colors={['#624484']} min={null} max={null} data={[["Jan", 1], ["Feb", 2], ["Mar", 4], ["Apr", 3]]} />
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, null)(GraphApproved);