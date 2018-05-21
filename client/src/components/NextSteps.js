import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
//import { connect } from 'react-redux';

class NextSteps extends Component {
    render() {
        return (
            <Row>
                <Col sm={12} className="section multiLines">
                    <div className="section-item notes">
                        <h4>Notes</h4> 
                    <FormGroup controlId="formControlsTextarea">
                        {/* <ControlLabel>Textarea</ControlLabel> */}
                        <FormControl componentClass="textarea" rows={4} placeholder="Insert notes for next steps here" />
                    </FormGroup>
                    </div>
                </Col>
                <Col sm={12}>
                    <Button bsStyle="primary">Approve</Button>
                    <Button bsStyle="warning">Reject</Button>
                </Col>
            </Row>
        )
    }
}

export default NextSteps;