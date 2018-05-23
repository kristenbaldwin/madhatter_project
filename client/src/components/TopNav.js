import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Nav.css';

class TopNav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <LinkContainer to="/">
                        <a>Madhatter Coalition</a>
                    </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to='/dashboard'>
                            <NavItem>Dashboard</NavItem>
                        </LinkContainer>
                        <LinkContainer to='/opps'>
                            <NavItem>All Opportunities</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to='/logout'>
                            <NavItem>Logout</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Navbar.Text pullRight>
                            Signed in: Mark Otto
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default TopNav;