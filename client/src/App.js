import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Login from './routes/Login';
import Success from './routes/Success';



class App extends Component {

  // testing
  getOpportunity() {
    fetch('/api/get_opportunity')
    .then(res => {
      res.json()
      .then(dummy)
    })
  }

  componentWillMount() {
    this.getOpportunity();
  }

  render() {
    return (
      <Router>
      <div>
          <Route path="/login" component={Login}/>
          <Route path="/success" component={Success}/>
      </div>
      </Router>
    );
  }
}

export default App;
