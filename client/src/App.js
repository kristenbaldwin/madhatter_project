import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AssessmentModal from './containers/assessment_modal'
import OppModal from './containers/opp_modal'



import Login from './routes/Login';
import Success from './routes/Success';



class App extends Component {

  testing
  getOpportunity() {
    fetch('/api/get_opportunity')
    // .then(res => {
    //   res.json()
    //   .then(dummy)
    // })
  }

  // componentWillMount() {
  //   this.getOpportunity();
  // }

  render() {
    return (
     <div>
       <AssessmentModal />
       <OppModal />
     </div>
    );
  }
}

export default App;
