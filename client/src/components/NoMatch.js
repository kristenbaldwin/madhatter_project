import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopNav from './TopNav';

const NoMatch = ({ location }) => (
    <Grid fluid={true} className="nav-container">
        <TopNav />
        <Row>
            <Col xs={12} className='notFound'>
                <h1>Whoops!</h1>
                <h3>Page not found: {location.pathname}</h3>
                <br />
                <h4>Would you tell me, please, which way I ought to go from here?</h4>
                <h4>Try starting back at the <Link to="/dashboard">dashboard</Link> to find what you're looking for.</h4>
                <img src="https://images.khinsider.com/KINGDOM%20HEARTS%20X/Artwork/Characters/Wonderland/Cheshire%20Cat.png" alt="Cheshire Cat" />
            </Col>
        </Row>
    </Grid>
);

export default NoMatch;