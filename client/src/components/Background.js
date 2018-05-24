import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class Background extends Component {
    render() {
        let col_1 = this.props.opps.map((opp) => {
            if (opp.id === this.props.opp_id.id) {
                return (
                    <Col sm={12} className="section multiLines">
                        <div className="section-item">
                            <h4>Founder</h4>
                            <p>{opp.founder}</p>
                        </div>
                        <div className="section-item">
                            <h4>Established</h4>
                            <p>{opp.est}</p>
                        </div>
                        <div className="section-item">
                            <h4>Industry</h4>
                            <p>{opp.industry}</p>
                        </div>
                        <div className="section-item">
                            <h4>Address</h4>
                            <p>{opp.contacts[0].address}<br />
                            {opp.contacts[0].city}, {opp.contacts[0].state} {opp.contacts[0].postal} {opp.contacts[0].country}</p>
                        </div>
                    </Col>
                )
            }
            return ''
        })

        let col_2 = this.props.opps.map((opp) => {
            if (opp.id === this.props.opp_id.id) {
                return (
                    <Col sm={12} className="section multiLines">
                        <div className="section-item">
                            <h4>Email</h4>
                            <p>{opp.contacts[0].email}</p>
                        </div>
                        <div className="section-item">
                            <h4>Phone</h4>
                            <p>{opp.contacts[0].phone}</p>
                        </div>
                        <div className="section-item">
                            <h4>Website</h4>
                            <a href={opp.contacts[0].website} target="_blank">{opp.contacts[0].website}</a>
                        </div>
                        <div className="section-item">
                            <h4>LinkedIn</h4>
                            <a href={opp.contacts[0].linkedin} target="_blank">{opp.contacts[0].linkedin}</a>
                        </div>
                    </Col>
                )
            }
            return ''
        })

        return (
            <Row>
                {col_1}
                {/* <Col sm={12} className="section multiLines">
                    <div className="section-item">
                        <h4>Founder</h4>
                        <p>John Doe</p>
                    </div>
                    <div className="section-item">
                        <h4>Established</h4>
                        <p>2018</p>
                    </div>
                    <div className="section-item">
                        <h4>Industry</h4>
                        <p>Tech</p>
                    </div>
                    <div className="section-item">
                        <h4>Address</h4>
                        <p>123 Main St.<br />
                        Houston, TX 77003 US</p>
                    </div>
                </Col> */}
                {col_2}
                {/* <Col sm={12} className="section multiLines">
                    <div className="section-item">
                        <h4>Email</h4>
                        <p>johnd@gmail.com</p>
                    </div>
                    <div className="section-item">
                        <h4>Phone</h4>
                        <p>713-245-8890</p>
                    </div>
                    <div className="section-item">
                        <h4>Website</h4>
                        <a href="">www.cooltech.com</a>
                    </div>
                    <div className="section-item">
                        <h4>LinkedIn</h4>
                        <a href="">www.linkedin.com/in/johndoe</a>
                    </div>
                </Col> */}
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

export default connect(mapStateToProps, null)(Background);