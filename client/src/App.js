import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/App.css';
import { Grid, Col, Row } from 'react-bootstrap';
import MainDash from './components/MainDash';
import loadOpp from './actions/loadOpp';
// import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
  // componentDidMount() {
  //   this.props.onDashLoad()
  // }
  getOpportunity() {
    fetch('/api/get_opportunity')
    .then(res => {
      res.json()
      .then(dummy => {
        this.props.loadOpp(dummy)
      })
    })
  }

  componentWillMount() {
    this.getOpportunity();
  }

  render() {
    return (
      <Grid fluid={true}>
        {/* <Nav /> */}
        <Row>
          <Col>
            <MainDash />
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    opps: state.opps
  }
}

export default connect(mapStateToProps, {loadOpp})(App);
