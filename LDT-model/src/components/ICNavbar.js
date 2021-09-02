import React from 'react';
import {
  Nav,
  NavDropdown,
  Navbar
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../assets/images/lowelllogo_horizontal_black_web.png";

function ICNavbar() {

  return (
    <Navbar className="color-nav" fixed="top" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="115"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Instrument" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">LMI</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Deveny</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">NIHTS</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">JOEControl</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Text>Instrument Control Interface</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default ICNavbar;