import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/App.css';
import { Grid, Col, Row } from 'react-bootstrap';
import MainDash from './components/MainDash';
import { loadDash } from './actions/loadDash';
// import Nav from './components/Nav';
// import Footer from './components/Footer';

class App extends Component {
<<<<<<< HEAD
  // componentDidMount() {
  //   this.props.onDashLoad()
  // }

  render() {
    return (
      <Grid fluid={true}>
        {/* <Nav /> */}
        <Row>
          <Col>
            <MainDash />
          </Col>
        </Row>
        {/* <Row>
          <Footer />
        </Row> */}
      </Grid>
=======

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
>>>>>>> 5ad7d0372dbed92e1fcc3b6dc139261aa39f86cd
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // onDashLoad: () => dispatch(loadDash())
  }
}

export default connect(null, mapDispatchToProps)(App);
