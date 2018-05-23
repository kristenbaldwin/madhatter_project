import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
//import { connect } from 'react-redux';

class Scoring extends Component {
    render() {
        return (
            <Row>
                <Col sm={12} className="section multiLines">
                    <div className="section-item overallScore">
                        <h4>Overall: </h4>&emsp;
                        <div className="scoreBox">
                            <p>20</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} className="section multiLines">
                    <div className="section-item">
                        <h4>Founders</h4>
                        <div className="scoreBox">
                            <p>8</p>
                        </div>
                    </div>
                    <div className="section-item">
                        <h4>Legal</h4>
                        <div className="scoreBox">
                            <p>3</p>
                        </div>
                    </div>
                    <div className="section-item">
                        <h4>Product</h4>
                        <div className="scoreBox">
                            <p>10</p>
                        </div>
                    </div>
                    <div className="section-item">
                        <h4>Financial</h4>
                        <div className="scoreBox">
                            <p>2</p>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Scoring;