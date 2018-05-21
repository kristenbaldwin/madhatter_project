import React from 'react';
import ReactDOM from 'react-dom';
import { Radio, Tab, Tabs, Popover, Button, Tooltip, Modal, OverlayTrigger } from 'react-bootstrap';
import '../components/modal.css';
import addScore from '../actions/ADD_SCORE'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../index';
import { FormGroup } from 'react-bootstrap';
import FounderQuestion from '../components/FounderQuestion';
import clearData from '../actions/CLEAR_DATA';
import LegalQuestion from '../components/LegalQuestion';
import ProductQuestion from '../components/ProductQuestion';
import FinancialsQuestion from '../components/FinancialsQuestion';


class AssessmentModal extends React.Component {
  constructor(props, context) {
    super(props, context);


    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.submitFounders = this.submitFounders.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.submitLegal = this.submitLegal.bind(this);
    this.submitOpp_Product = this.submitOpp_Product.bind(this);
    this.submitFinancials = this.submitFinancials.bind(this);
    this.submitAll = this.submitAll.bind(this);

    // this.handleAnswer = this.handleAnswer.bind(this);
    // this.handleForm = this.handleForm.bind(this);

    this.state = {
      show: false,
      qa: []

    };
  };


  submitFounders(){
    return new Promise(function(res, rej){
      let foundersList = [];
      for(var i = 0; i < 11; i++){
        let data = {
          question: store.getState().founderQuestionData[i].id,
          answer: store.getState().founderQuestionData[i].answer,
          opp_id: 5
        }
        foundersList.push(data)
     }
     fetch('/api/create_founders', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(foundersList)
    }).then(res => {
          res.json().then(data =>
              console.log('State Updated')
          )
      })
    })
    }

    submitLegal(){
     return new Promise(function(res, rej){
      let legalList = [];
      for(var i = 0; i < 4; i++){
        let data = {
          question: store.getState().legalQuestionData[i].id,
          answer: store.getState().legalQuestionData[i].answer,
          opp_id: 5
        }
        legalList.push(data)
     }
     fetch('/api/create_legal', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(legalList)
    }).then(res => {
          res.json().then(data =>
              console.log('State Updated')
          )
      })
     })
      
      }

      submitOpp_Product(){
        return new Promise(function(res, rej){
          let oppList = [];
          for(var i = 0; i < 6; i++){
            let data = {
              question: store.getState().productQuestionData[i].id,
              answer: store.getState().productQuestionData[i].answer,
              opp_id: 5
            }
            oppList.push(data);
          }
            console.log(oppList)
            fetch('/api/create_opp_product', {
              method: 'POST',
              headers: new Headers({ 'Content-Type': 'application/json' }),
              body: JSON.stringify(oppList)
            }).then(res => {
                  res.json().then(data =>
                      console.log('State Updated')
                  )
              })
        })
        }

        submitFinancials(){
         return new Promise(function(res, rej){
           let financialsList = [];
          for(var i = 0; i < 6; i++){
            let data = {
              question: store.getState().financialsQuestionData[i].id,
              answer: store.getState().financialsQuestionData[i].answer,
              opp_id: 5
            }
            financialsList.push(data)
          }
          fetch('/api/create_financial', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(financialsList)
          })
            .then(res => {
                  res.json().then(data =>
                      console.log('State Updated')
                  )
              })
         })
         
          }

          submitAll(event){
            event.preventDefault();
            var state = store.getState();
            var founders = state.founderQuestionData;
            var financial = state.financialsQuestionData;
            var legal = state.legalQuestionData;
            var product = state.productQuestionData;
            var count = 0;

            for(var x = 0; x < founders.length; x++){
              if(founders[x].answer === "") {
                count = count + 1;
              }
            }
            for(var y = 0; y < financial.length; y++){
              if(financial[y].answer === "") {
                count = count + 1
              }
            }
            for(var z = 0; z < legal.length; z++){
              if(legal[z].answer === "") {
                count = count + 1;
              }
            }
            for(var w = 0; w < product.length; w++){
              if(founders[w].answer === "") {
                count = count + 1;
              }
            }

            if (count > 0) {
              alert('You must answer all questions')
            } else if (count === 0)

            {
            //console.log(store.getState())
             this.submitFounders().then(this.submitLegal()).then(this.submitOpp_Product()).then(this.submitFinancials()).then(this.handleSubmit()).catch(function(err){
               if (err){
                 console.log(err)
               }
             })
            }
          }
          
  
  handleSubmit(){
    this.setState({ show: false })
  }

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
              <Button onClick={this.submitAll} type="submit" bsStyle="primary">Submit</Button>
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