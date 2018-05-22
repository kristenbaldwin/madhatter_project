import React from 'react';
import { Radio, FormGroup } from 'react-bootstrap';
import '../styles/Modal.css';
import addScore from '../actions/ADD_SCORE';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clearData from '../actions/CLEAR_DATA';

class LegalQuestion extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(question, answer){


    }

    render(){
        return(
            <div className='questionContainer'>
                <p>
                  {this.props.questionText}
                </p>
                <FormGroup name={this.props.groupName}>
                <Radio onClick={() => this.props.addScore(this.props.id, 0)} name={this.props.id} value="0">0</Radio>
                <Radio onClick={()=>this.props.addScore(this.props.id, 1)} name={this.props.id} value="1">1</Radio>
                <Radio onClick={()=>this.props.addScore(this.props.id, 2)} name={this.props.id} value="2" >2</Radio>
                </FormGroup>
                </div>
        )
    }
}

function mapStateToProps(state) {
    return(
        {
            legal: state.legal
        }
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addScore: addScore, clearData: clearData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LegalQuestion);