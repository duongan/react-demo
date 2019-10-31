import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.svg';

const MainMenu = () => {
    const { pathname } = useLocation();
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pathname}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default MainMenu;
