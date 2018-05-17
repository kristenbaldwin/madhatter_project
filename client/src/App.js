import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/App.css';
import { Grid, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainDash from './components/MainDash';
import loadOpp from './actions/loadOpp';
import TopNav from './components/TopNav';
import Footer from './components/Footer';

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
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
            <Route exact path="/" component={MainDash} />
            {/* <Route path="/opps" component={Opportunity} /> */}
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
