import React from 'react'
import ReactDOM from 'react-dom'
import { Radio, Tab, Tabs, Popover, Button, Tooltip, Modal, OverlayTrigger } from 'react-bootstrap';
import '../components/modal.css'
import addScore from '../actions/ADD_SCORE'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import store from '../index'
import { FormGroup } from 'react-bootstrap';
import FounderQuestion from '../components/FounderQuestion'
import clearData from '../actions/CLEAR_DATA';
import LegalQuestion from '../components/LegalQuestion';
import ProductQuestion from '../components/ProductQuestion'
import FinancialsQuestion from '../components/FinancialsQuestion'


class AssessmentModal extends React.Component {
  constructor(props, context) {
    super(props, context);


    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    // this.handleAnswer = this.handleAnswer.bind(this);
    // this.handleForm = this.handleForm.bind(this);

    this.state = {
      show: false,
      qa: []

    };
  };

  handleClose() {
    this.setState({ show: false });
    this.props.clearData();
  }

  handleShow() {
    this.setState({ show: true });
  }

  //   handleAnswer(event) {
  //       this.setState({

  //       })
  //   }

  handleForm(event) {
    event.preventDefault();
    console.log('working')
  }

  render() {
    let founderQuestions = [];
    founderQuestions = this.props.founders.map(function (questionData) {
      return (<FounderQuestion id={questionData.id} key={questionData.id} questionText={questionData.question} />)
    })
    let legalQuestions = [];
    legalQuestions = this.props.legal.map(function (questionData) {
      return (<LegalQuestion id={questionData.id} key={questionData.id} questionText={questionData.question} />)
    })
    let productQuestions = [];
    productQuestions = this.props.product.map(function(questionData){
      return (<ProductQuestion id={questionData.id} key={questionData.id} questionText={questionData.question} />)
    })
    let financialsQuestions = [];
    financialsQuestions = this.props.financials.map(function(questionData){
      return (<FinancialsQuestion id={questionData.id} key={questionData.id} questionText={questionData.question} />)
    })

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
              <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="Founders">
                  {founderQuestions}
                </Tab>
                <Tab eventKey={2} title="Legal">
                {legalQuestions}
                </Tab>
                <Tab eventKey={3} title="Product">
                {productQuestions}
                </Tab>
                <Tab eventKey={4} title="Financials">
                {financialsQuestions}
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

function mapStateToProps(state) {
  return {
    founderQuestionData: state.founderQuestionData,
    founders: state.founders,
    legal: state.legal,
    product: state.product,
    financials: state.financials
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addScore: addScore, clearData: clearData }, (dispatch))
};

export default connect(mapStateToProps, mapDispatchToProps)(AssessmentModal);