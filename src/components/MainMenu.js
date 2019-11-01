import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.svg';
import '../App.css';

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
      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <Link className="navbar-brand" to={'/'}>
      //     <img src={logo} className="App-logo" alt="logo" />
      //   </Link>
      //   <ul className="navbar-nav mr-auto">
      //     <li><Link to={'/'} className="nav-link">Home</Link></li>
      //     <li><Link to={'/products'} className="nav-link">Products</Link></li>
      //     <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
      //     <li><Link to={'/about'} className="nav-link">About</Link></li>
      //   </ul>
      // </nav>
    );
};

export default MainMenu;
