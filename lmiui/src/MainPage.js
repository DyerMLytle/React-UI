import React, { Component } from 'react';
import Products from "./Products";
import GateKeeper from "./Gatekeeper";
import { Container, Row, Col } from 'react-bootstrap';

class MainPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container fluid>
        <Row className="show-grid">
          <Col>
            <Products />
          </Col>
          <Col>
            <GateKeeper />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;