import React, { Component } from 'react';
import GateKeeper from "./Gatekeeper";
import CanvasControls from "./CanvasControls";
import { Container, Row, Col } from 'react-bootstrap';

class MainPage extends Component {

  render() {
    return (
      <Container >
        <Row className="show-grid">
          <Col lg={2}>
            <CanvasControls />
          </Col>
          <Col >
            <GateKeeper />
          </Col>
          <Col lg={2}>
            hello, hello
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;