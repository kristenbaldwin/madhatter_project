import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import AssessmentModal from './containers/assessment_modal'
import OppModal from './containers/opp_modal'

import { connect } from 'react-redux';
import './styles/App.css';
import { Grid, Row } from 'react-bootstrap';
import { BrowserRouter, Router, Route, Link, Switch } from 'react-router-dom';
import MainDash from './components/MainDash';
import loadOpp from './actions/loadOpp';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import Login from './routes/Login';
import Success from './routes/Success';
import Opps from './components/Opps';
import OneOpp from './components/OneOpp';


const NoMatch = ({ location }) => (
  <div className='notFound'>
    <h1>Whoops!</h1>
    <h3>Page not found: {location.pathname}</h3>
    <br />
    <h4>Would you tell me, please, which way I ought to go from here?</h4>
    <h4>Try starting back at the <Link to="/dashboard">dashboard</Link> to find what you're looking for.</h4>
    <img src="https://images.khinsider.com/KINGDOM%20HEARTS%20X/Artwork/Characters/Wonderland/Cheshire%20Cat.png" alt="Cheshire Cat" />
  </div>
);

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
      <BrowserRouter>
        <Grid fluid={true}>
          <TopNav />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={MainDash} />
            <Route exact path="/opps" component={Opps} />
            <Route path="/opps/:id" component={OneOpp} />
            {/* <Route path="/logout" component={Logout} /> */}
            <Route component={NoMatch} />
          </Switch>
          <Row>
            <Footer />
          </Row>
        </Grid>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    opps: state.opps
  }
}

export default connect(mapStateToProps, {loadOpp})(App);
