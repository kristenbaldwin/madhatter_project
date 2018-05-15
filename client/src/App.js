import React, { Component } from 'react';
import './styles/App.css';
import { Grid, Col, Row } from 'react-bootstrap';
import MainDash from './components/MainDash';
// import Nav from './components/Nav';
// import Footer from './components/Footer';

class App extends Component {
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

export default App;
