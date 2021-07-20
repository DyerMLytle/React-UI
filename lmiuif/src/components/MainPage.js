import React from 'react';
import CanvasControls from "./CanvasControls";
import ICNavbar from "./ICNavbar";
import FocusOffcan from './FocusOffcan';
import ExposeOffcan from './ExposeOffcan';
import FilterOffcan from './FilterOffcan';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function MainPage() {
  
  return (

    <Container fluid style={{ width: "98%", height: "100%" }}>
      <ICNavbar />



      {/* Add a little space at the top, below the Navbar, above the Grid. */}
      <Row style={{ marginLeft: 0, marginRight: 0 }} ><p /></Row>
      {/* This is the Bootstrap Grid layout. */}
      <Row style={{ marginLeft: -10, marginRight: 0 }} >
        <Col style={{ paddingLeft: 10, paddingRight: 10, width: "1020px" }}>
          <CanvasControls />
        </Col>
        <Col lg={2} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ width: "100%", height: "100%" }}>
            <FocusOffcan />
            <p />
            <ExposeOffcan />
            <p />
            <FilterOffcan />
          </div>
        </Col>
      </Row>
    </Container >
  )
}

export default MainPage;