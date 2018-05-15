import React from 'react'
import { Radio, Tab, Tabs, Popover, Button, Tooltip, Modal, OverlayTrigger} from 'react-bootstrap';
import './modal.css'

class QModal extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
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
              <Modal.Header closeButton>
                <Modal.Title>Startup Assessment</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Founders">
                <div id="fd1q1" className='questionContainer'>
                <p>
                  Does the team have related industry experience at their core?
                </p>
                <Radio name="groupOptions1">0</Radio>
                <Radio name="groupOptions1">1</Radio>
                <Radio name="groupOptions1">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Have the leaders successfully launched a startup that resulted in a positive exit before?
                </p>
                <Radio name="groupOptions2">0</Radio>
                <Radio name="groupOptions2">1</Radio>
                <Radio name="groupOptions2">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Can the leaders pass a background check?
                </p>
                <Radio name="groupOptions3">0</Radio>
                <Radio name="groupOptions3">1</Radio>
                <Radio name="groupOptions3">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Are the leaders emotionally ready for the ups and dows of this adventure?
                </p>
                <Radio name="groupOptions4">0</Radio>
                <Radio name="groupOptions4">1</Radio>
                <Radio name="groupOptions4">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Are the leaders soley focused on this effort?
                </p>
                <Radio name="groupOptions5">0</Radio>
                <Radio name="groupOptions5">1</Radio>
                <Radio name="groupOptions5">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Is there a full executive team in place and currently functioning?
                </p>
                <Radio name="groupOptions6">0</Radio>
                <Radio name="groupOptions6">1</Radio>
                <Radio name="groupOptions6">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Is the team capable of executing the work required for success?
                </p>
                <Radio name="groupOptions7">0</Radio>
                <Radio name="groupOptions7">1</Radio>
                <Radio name="groupOptions7">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Is there a good personal chemistry among the founders?
                </p>
                <Radio name="groupOptions8">0</Radio>
                <Radio name="groupOptions8">1</Radio>
                <Radio name="groupOptions8">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Do the personal financial needs of the founders match the capacity of the business in this phase?
                </p>
                <Radio name="groupOptions9">0</Radio>
                <Radio name="groupOptions9">1</Radio>
                <Radio name="groupOptions9">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Are the founders willing to put an office in Houston?
                </p>
                <Radio name="groupOptionsA">0</Radio>
                <Radio name="groupOptionsA">1</Radio>
                <Radio name="groupOptionsA">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Are the founders willing to listen to us and put in place the work we recommend?
                </p>
                <Radio name="groupOptionsB">0</Radio>
                <Radio name="groupOptionsB">1</Radio>
                <Radio name="groupOptionsB">2</Radio>
                </div>
                </Tab>
                <Tab eventKey={2} title="Legal">
                <div className='questionContainer'>
                <p>
                  Clean cap table?
                </p>
                <Radio name="groupOptionsC">0</Radio>
                <Radio name="groupOptionsC">1</Radio>
                <Radio name="groupOptionsC">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                   Pending litigation or active legal issues?
                </p>
                <Radio name="groupOptionsD">0</Radio>
                <Radio name="groupOptionsD">1</Radio>
                <Radio name="groupOptionsD">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Is the venture a formalized legal entity ready for investment?
                </p>
                <Radio name="groupOptionsE">0</Radio>
                <Radio name="groupOptionsE">1</Radio>
                <Radio name="groupOptionsE">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  IP currently protected?
                </p>
                <Radio name="groupOptionsG">0</Radio>
                <Radio name="groupOptionsG">1</Radio>
                <Radio name="groupOptionsG">2</Radio>
                </div>
                </Tab>
                <Tab eventKey={3} title="Opportunity/Product">
                <div className='questionContainer'>
                <p>
                  Does existing market data support the startup's assumptions?
                </p>
                <Radio name="groupOptionsH">0</Radio>
                <Radio name="groupOptionsH">1</Radio>
                <Radio name="groupOptionsH">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Do they have quantifiable proof of product/market fit?
                </p>
                <Radio name="groupOptionsI">0</Radio>
                <Radio name="groupOptionsI">1</Radio>
                <Radio name="groupOptionsI">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  IP currently protected?
                </p>
                <Radio name="groupOptionsG">0</Radio>
                <Radio name="groupOptionsG">1</Radio>
                <Radio name="groupOptionsG">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                  Do they have a technical competitive advantage?
                </p>
                <Radio name="groupOptionsH">0</Radio>
                <Radio name="groupOptionsH">1</Radio>
                <Radio name="groupOptionsH">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                Is the startup clear of any immediate threat from competition? Cannot impede its path to its goal?
                </p>
                <Radio name="groupOptionsI">0</Radio>
                <Radio name="groupOptionsI">1</Radio>
                <Radio name="groupOptionsI">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                Does the business concept appear to be based on verifiable technical and business principles (i.e., does it make sense?)?
                </p>
                <Radio name="groupOptionsJ">0</Radio>
                <Radio name="groupOptionsJ">1</Radio>
                <Radio name="groupOptionsJ">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                Have strategic relationships providing value to the effort?
                </p>
                <Radio name="groupOptionsK">0</Radio>
                <Radio name="groupOptionsK">1</Radio>
                <Radio name="groupOptionsK">2</Radio>
                </div>
                </Tab>
                <Tab eventKey={4} title="Financials">
                <div className='questionContainer'>
                <p>
                Are there current financial statements and cash-flow projections prepared or reviewed by an outside accountant?
                </p>
                <Radio name="groupOptionsL">0</Radio>
                <Radio name="groupOptionsL">1</Radio>
                <Radio name="groupOptionsL">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                Are they currently generating revenue?
                </p>
                <Radio name="groupOptionsM">0</Radio>
                <Radio name="groupOptionsM">1</Radio>
                <Radio name="groupOptionsM">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                Can they show or are they currently experience repeatable growth?
                </p>
                <Radio name="groupOptionsN">0</Radio>
                <Radio name="groupOptionsN">1</Radio>
                <Radio name="groupOptionsN">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                Is the size of the addressable target market greater than $50m? 
                </p>
                <Radio name="groupOptionsO">0</Radio>
                <Radio name="groupOptionsO">1</Radio>
                <Radio name="groupOptionsO">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                Does market value verify opportunity?
                </p>
                <Radio name="groupOptionsP">0</Radio>
                <Radio name="groupOptionsP">1</Radio>
                <Radio name="groupOptionsP">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                Are capital needs within our investment range?
                </p>
                <Radio name="groupOptionsQ">0</Radio>
                <Radio name="groupOptionsQ">1</Radio>
                <Radio name="groupOptionsQ">2</Radio>
                </div>
                <div className='questionContainer'>
                <p>
                Is there a likelihood of acquisition or the next step in funding within X time frame?
                </p>
                <Radio name="groupOptionsR">0</Radio>
                <Radio name="groupOptionsR">1</Radio>
                <Radio name="groupOptionsR">2</Radio>
                </div>
                </Tab>
                </Tabs>
              </Modal.Body>
              <Modal.Footer>
                <Button bsStyle="primary" onClick={this.handleClose}>Submit</Button>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }
    }

export default QModal;