import React from 'react'
import ReactDOM from 'react-dom'
import { Radio, Tab, Tabs, Popover, Button, Tooltip, Modal, OverlayTrigger } from 'react-bootstrap';
import '../components/modal.css'
import addScore from '../actions/ADD_SCORE'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import store from '../index'
import { FormGroup } from 'react-bootstrap';
import clearData from '../actions/CLEAR_DATA';

class OppModal extends React.Component {
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
        //   let founderQuestions = [];
        //   founderQuestions = this.props.founders.map(function (questionData) {
        //     return (<FounderQuestion id={questionData.id} key={questionData.id} questionText={questionData.question} />)
        //   })
        //   let legalQuestions = [];
        //   legalQuestions = this.props.legal.map(function (questionData) {
        //     return (<LegalQuestion id={questionData.id} key={questionData.id} questionText={questionData.question} />)
        //   })
        //   let productQuestions = [];
        //   productQuestions = this.props.product.map(function(questionData){
        //     return (<ProductQuestion id={questionData.id} key={questionData.id} questionText={questionData.question} />)
        //   })
        //   let financialsQuestions = [];
        //   financialsQuestions = this.props.financials.map(function(questionData){
        //     return (<FinancialsQuestion id={questionData.id} key={questionData.id} questionText={questionData.question} />)
        //   })

        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
        const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
        let states = [];
        states = statesArray.map(function (state) {
            return (<option>{state}</option>)
        })
        return (
            <div>
                <p>Click to get the full Modal experience!</p>

                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    Launch demo modal
              </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <form onSubmit={this.handleForm}>
                        <Modal.Header closeButton>
                            <Modal.Title><i class="fal fa-plus-circle"></i>  Create Opportunity</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Tabs defaultActiveKey={1}>
                                <Tab eventKey={1} title="General">
                                    <FormGroup id="generalInfo">
                                        <div className="nameInput">
                                            <input id="nameInput" name="name" placeholder="Name" type="text"></input>
                                        </div>
                                        <div className="foundersInput">
                                            <input id="foundersInput" name="founders" placeholder="Founders" type="text"></input>
                                        </div>
                                        <div className="industryInput">
                                            <input id="industryInput" name="industry" placeholder="Industry" type="text"></input>
                                        </div>
                                       
                                        <div className="estInput">
                                        <label for="est">Established Date</label>
                                            <input id="estInput" name="est" plaeholder="Established" type="date"></input>
                                        </div>
                                        <div className="attachmentsInput">
                                            <label for="pic">Logo</label>
                                            <input id="attachmentsInput" type="file" name="pic" accept="image/*"></input>
                                        </div>
                                        <div className="createdByInput">
                                            <select id="createdByInput" name="createdby">
                                                <option>Submitted By</option>
                                                <option>User1</option>
                                                <option>User2</option>
                                            </select>
                                        </div>
                                    </FormGroup>
                                </Tab>
                                <Tab eventKey={2} title="Contact Information">
                                    <FormGroup id="contactInfo">
                                        <div className="phoneInput">
                                            <input id="phoneInput" name="phone" placeholder="Phone" type="text"></input>
                                        </div>
                                        <div className="emailInput">
                                            <input id="emailInput" name="email" placeholder="Email" type="email"></input>
                                        </div>
                                        <div className="addressInput">
                                            <input id="addressInput" name="address" placeholder="Address" type="text"></input>
                                        </div>
                                        <div className="cityInput">
                                            <input id="cityInput" name="city" placeholder="City" type="text"></input>
                                        </div>
                                        
                                        <div className="stateInput">
                                            <select id="stateInput" name="state" placeholder="State" type="text">
                                                {states}
                                            </select>
                                        </div>
                                        <div className="postalInput">
                                            <input id="postalInput" name="postal" placeholder="Postal" type="number"></input>
                                        </div>
                                        <div className="countryInput">
                                            <select id="countryInput" name="country" placeholder="Country" type="text">
                                                <option>USA</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="websiteInput">
                                            <input id="websiteInput" name="website" placeholder="Website" type="url"></input>
                                        </div>
                                        <div className="linkedinInput">
                                            <input id="linkedinInput" name="linkedin" placeholder="LinkedIn" type="url"></input>
                                        </div>


                                    </FormGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(OppModal);