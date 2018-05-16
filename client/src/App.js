import React, { Component } from 'react';
import './styles/App.css';

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
      <div className="App">
        Hi
      </div>
    );
  }
}

export default App;
