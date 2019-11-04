import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.svg';
import '../App.css';
import CartStore from '../stores/CartStore';

const MainMenu = (props) => {
    const { pathname } = useLocation();
    const cart = CartStore.getState();
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pathname}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
          <a className="btn btn-primary" href={'/cart'}>
            Cart <span className="badge badge-danger">{cart.length}</span>
            <span className="sr-only">unread messages</span>
          </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default MainMenu;
