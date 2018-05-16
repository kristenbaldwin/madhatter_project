import React from 'react'
import ReactDOM from 'react-dom'
import { Radio, Tab, Tabs, Popover, Button, Tooltip, Modal, OverlayTrigger} from 'react-bootstrap';
import './modal.css'
import addScore from '../actions/ADD_SCORE'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import store from '../index'
import { FormGroup } from 'react-bootstrap';


class QModal extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleForm = this.handleForm.bind(this);
    
        this.state = {
          show: false,
          qa: []

        };
      };
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

    //   handleAnswer(event) {
    //       this.setState({
              
    //       })
    //   }
    
      render() {
        const popover = (
          <Popover id="modal-popover" title="popover">
            very popover. such engagement
          </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    
        return (
          <div>
            <p>Click to get the full Modal experience!</p>
    
            <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
              Launch demo modal
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
            <form onSubmit={this.handleForm}>
              <Modal.Header closeButton>
                <Modal.Title>Startup Assessment</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Founders">
                <div className='questionContainer'>
                <p>
                  Does the team have related industry experience at their core?
                </p>
                <FormGroup value={this.state.q1} name="formgroup1">
                <Radio onClick={this.handleAnswer} name="q1" value="0">0</Radio>
                <Radio name="q1" value="1">1</Radio>
                <Radio name="q1" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Have the leaders successfully launched a startup that resulted in a positive exit before?
                </p>
                <FormGroup value={this.state.q2}>
                <Radio onClick={this.handleAnswer} name="q2" value="0">0</Radio>
                <Radio onClick = {this.handleAnswer} name="q2" value="1">1</Radio>
                <Radio onClick={this.handleAnswer} name="q2" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Can the leaders pass a background check?
                </p>
                <FormGroup value={this.state.q3}>
                <Radio name="q3" value="0">0</Radio>
                <Radio name="q3" value="1">1</Radio>
                <Radio name="q3" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Are the leaders emotionally ready for the ups and dows of this adventure?
                </p>
                <FormGroup value={this.state.q4}>
                <Radio name="q4" value="0">0</Radio>
                <Radio name="q4" value="1">1</Radio>
                <Radio name="q4" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Are the leaders soley focused on this effort?
                </p>
                <FormGroup value={this.state.q5}>
                <Radio name="q5" value="0">0</Radio>
                <Radio name="q5" value="1">1</Radio>
                <Radio name="q5" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Is there a full executive team in place and currently functioning?
                </p>
                <FormGroup value={this.state.q6}>
                <Radio name="q6" value="0">0</Radio>
                <Radio name="q6" value="1">1</Radio>
                <Radio name="q6" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Is the team capable of executing the work required for success?
                </p>
                <FormGroup value={this.state.q7}>
                <Radio name="q7" value="0">0</Radio>
                <Radio name="q7" value="1">1</Radio>
                <Radio name="q7" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Is there a good personal chemistry among the founders?
                </p>
                <FormGroup value={this.state.q8}>
                <Radio name="q8" value="0">0</Radio>
                <Radio name="q8" value="1">1</Radio>
                <Radio name="q8" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Do the personal financial needs of the founders match the capacity of the business in this phase?
                </p>
                <FormGroup value={this.state.q9}>
                <Radio name="q9" value="0">0</Radio>
                <Radio name="q9" value="1">1</Radio>
                <Radio name="q9" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Are the founders willing to put an office in Houston?
                </p>
                <FormGroup value={this.state.q10}>
                <Radio name="q10" value="0">0</Radio>
                <Radio name="q10" value="1">1</Radio>
                <Radio name="q10" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Are the founders willing to listen to us and put in place the work we recommend?
                </p>
                <FormGroup value={this.state.q11}>
                <Radio name="q11" value="0">0</Radio>
                <Radio name="q11" value="1">1</Radio>
                <Radio name="q11" value="2">2</Radio>
                </FormGroup>
                </div>
                </Tab>
                <Tab eventKey={2} title="Legal">
                <div className='questionContainer'>
                <p>
                  Clean cap table?
                </p>
                <FormGroup value={this.state.q12}>
                <Radio name="q12" value="0">0</Radio>
                <Radio name="q12" value="1">1</Radio>
                <Radio name="q12" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                   Pending litigation or active legal issues?
                </p>
                <FormGroup value={this.state.q13}>
                <Radio name="q13" value="0">0</Radio>
                <Radio name="q13" value="1">1</Radio>
                <Radio name="q13" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Is the venture a formalized legal entity ready for investment?
                </p>
                <FormGroup value={this.state.q14}>
                <Radio name="q14" value="0">0</Radio>
                <Radio name="q14" value="1">1</Radio>
                <Radio name="q14" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  IP currently protected?
                </p>
                <FormGroup value={this.state.q15}>
                <Radio name="q15" value="0">0</Radio>
                <Radio name="q15" value="1">1</Radio>
                <Radio name="q15" value="2">2</Radio>
                </FormGroup>
                </div>
                </Tab>
                <Tab eventKey={3} title="Opportunity/Product">
                <div className='questionContainer'>
                <p>
                  Does existing market data support the startup's assumptions?
                </p>
                <FormGroup value={this.state.q16}>
                <Radio name="q16" value="0">0</Radio>
                <Radio name="q16" value="1">1</Radio>
                <Radio name="q16" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Do they have quantifiable proof of product/market fit?
                </p>
                <FormGroup value={this.state.q17}>
                <Radio name="q17" value="0">0</Radio>
                <Radio name="q17" value="1">1</Radio>
                <Radio name="q17" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                  Do they have a technical competitive advantage?
                </p>
                <FormGroup value={this.state.q18}>
                <Radio name="q18" value="0">0</Radio>
                <Radio name="q18" value="1">1</Radio>
                <Radio name="q18" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                Is the startup clear of any immediate threat from competition? Cannot impede its path to its goal?
                </p>
                <FormGroup value={this.state.q19}>
                <Radio name="q19" value="0">0</Radio>
                <Radio name="q19" value="1">1</Radio>
                <Radio name="q19" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                Does the business concept appear to be based on verifiable technical and business principles (i.e., does it make sense?)?
                </p>
                <FormGroup value={this.state.q20}>
                <Radio name="q20" value="0">0</Radio>
                <Radio name="q20" value="1">1</Radio>
                <Radio name="q20" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                Have strategic relationships providing value to the effort?
                </p>
                <FormGroup value={this.state.q21}>
                <Radio name="q21" value="0">0</Radio>
                <Radio name="q21" value="1">1</Radio>
                <Radio name="q21" value="2">2</Radio>
                </FormGroup>
                </div>
                </Tab>
                <Tab eventKey={4} title="Financials">
                <div className='questionContainer'>
                <p>
                Are there current financial statements and cash-flow projections prepared or reviewed by an outside accountant?
                </p>
                <FormGroup value={this.state.q22}>
                <Radio name="q22" value="0">0</Radio>
                <Radio name="q22" value="1">1</Radio>
                <Radio name="q22" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                Are they currently generating revenue?
                </p>
                <FormGroup value={this.state.q23}>
                <Radio name="q23" value="0">0</Radio>
                <Radio name="q23" value="1">1</Radio>
                <Radio name="q23" value="1">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                Can they show or are they currently experience repeatable growth?
                </p>
                <FormGroup value={this.state.q24}>
                <Radio name="q24" value="0">0</Radio>
                <Radio name="q24" value="1">1</Radio>
                <Radio name="q24" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                Is the size of the addressable target market greater than $50m? 
                </p>
                <FormGroup value={this.state.q25}>
                <Radio name="q25" value="0">0</Radio>
                <Radio name="q25" value="1">1</Radio>
                <Radio name="q25" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                Does market value verify opportunity?
                </p>
                <FormGroup value={this.state.q26}>
                <Radio name="q26" value="0">0</Radio>
                <Radio name="q26" value="1">1</Radio>
                <Radio name="q26" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                Are capital needs within our investment range?
                </p>
                <FormGroup value={this.state.q27}>
                <Radio name="q27" value="0">0</Radio>
                <Radio name="q27" value="1">1</Radio>
                <Radio name="q27" value="2">2</Radio>
                </FormGroup>
                </div>
                <div className='questionContainer'>
                <p>
                Is there a likelihood of acquisition or the next step in funding within X time frame?
                </p>
                <FormGroup value={this.state.q28}>
                <Radio name="q28" value="0">0</Radio>
                <Radio name="q28" value="1">1</Radio>
                <Radio name="q28" value="2">2</Radio>
                </FormGroup>
                </div>
                </Tab>
                </Tabs>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" bsStyle="primary">Submit</Button>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
              </form>
            </Modal>
          </div>
        );
      }
    }

function mapStateToProps(state){
    return{
        qa: state.questionData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addScore: addScore}, (dispatch))
};

export default connect(mapStateToProps, mapDispatchToProps)(QModal);