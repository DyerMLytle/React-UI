import React, { Component } from 'react';
//import GateKeeper from "./Gatekeeper";
import CanvasControls from "./CanvasControls";
import { Navbar, Container, Row, Col } from 'react-bootstrap';
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
            <Navbar.Text>
              Signed in as: <a href="#login">Dyer Lytle</a>
            </Navbar.Text>
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