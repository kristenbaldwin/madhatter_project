import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
//import { connect } from 'react-redux';

class Background extends Component {
    render() {
        return (
            <Row>
                <Col sm={12} className="section multiLines">
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
                </Col>
                <Col sm={12} className="section multiLines">
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
                </Col>
            </Row>
        )
    }
}

export default Background;