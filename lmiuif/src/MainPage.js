import React from 'react';
import CanvasControls from "./CanvasControls";
import {
  InputGroup,
  FormControl,
  Button,
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "./assets/images/lowelllogo_horizontal_black_web.png";

function MainPage() {
  return (
    <Container fluid style={{ width: "98%", height: "100%" }}>
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
          <Navbar.Text>LDT I-Control</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Row style={{ marginLeft: 0, marginRight: 0 }} ><p /></Row>
      <Row style={{ marginLeft: -10, marginRight: 0 }} >
        <Col lg={2} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ width: "100%", height: "100%" }}>
            <div className="btn-group">
              <Button variant="primary" size="sm" >
                Focus
              </Button>
              <Button variant="primary" size="sm">Button 2</Button>
            </div>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
          </div>
        </Col>
        <Col style={{ paddingLeft: 10, paddingRight: 10 }}>
          <CanvasControls />
        </Col>
        <Col lg={2} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ width: "100%", height: "100%" }}>
            <div className="btn-group">
              <Button variant="primary" size="sm">Button 1</Button>
              <Button variant="primary" size="sm">Button 2</Button>
            </div>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
          </div>
        </Col>
      </Row>
      {/* </Container> */}
    </Container >
  );
}


export default MainPage;