import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/App.css';
import { Grid, Col, Row } from 'react-bootstrap';
import MainDash from './components/MainDash';
import { loadDash } from './actions/loadDash';
// import Nav from './components/Nav';
// import Footer from './components/Footer';

class App extends Component {
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
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // onDashLoad: () => dispatch(loadDash())
  }
}

export default connect(null, mapDispatchToProps)(App);
