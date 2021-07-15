import React, { Component } from 'react';
import CanvasControls from "./CanvasControls";
import { Nav, NavDropdown, Navbar, Container, Row, Col } from 'react-bootstrap';
import logo from "./assets/images/lowelllogo_horizontal_black_web.png";

class MainPage extends Component {

  render() {
    return (

      <Container>
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
            <Nav className="me-auto">
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
            <Navbar.Text>LDT I-Control</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Container >
          <Row className="show-grid h-100" >
            <Col lg={1}>
              hello, hello
            </Col>
            <Col >
              <CanvasControls />
            </Col>
            <Col lg={1}>
              goodby, goodby
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default MainPage;