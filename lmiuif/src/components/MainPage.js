import React from 'react';
import CanvasControls from "./CanvasControls";
import ICNavbar from "./ICNavbar";
import FocusOffcan from './FocusOffcan';
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Popover,
  OverlayTrigger,
  Col,
  PopoverBody,
  PopoverHeader
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function MainPage() {
  // const [show, setShow] = React.useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  const popover = (
    < Popover id="popover-basic" >
      <PopoverHeader as="h3">Popover left</PopoverHeader>
      <PopoverBody>
        <Button variant="primary" size="sm">Button 1</Button>
        <pre>

        </pre>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </PopoverBody>
    </Popover >
  )

  return (

    <Container fluid style={{ width: "98%", height: "100%" }}>
      <ICNavbar />



      {/* Add a little space at the top, below the Navbar, above the Grid. */}
      <Row style={{ marginLeft: 0, marginRight: 0 }} ><p /></Row>
      {/* This is the Bootstrap Grid layout. */}
      <Row style={{ marginLeft: -10, marginRight: 0 }} >
        <Col style={{ paddingLeft: 10, paddingRight: 10 }}>
          <CanvasControls />
        </Col>
        <Col lg={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ width: "100%", height: "100%" }}>
            <FocusOffcan />

            <OverlayTrigger trigger="click" placement="left" overlay={popover}>
              <div style={{
                paddingTop: "10px", paddingBottom: "10px",
                paddingLeft: "10px", paddingRight: "10px"
              }}>
                <Button variant="primary" size="sm">Expose</Button>
              </div>
            </OverlayTrigger>
            <div style={{
              paddingTop: "10px", paddingBottom: "10px",
              paddingLeft: "10px", paddingRight: "10px"
            }}>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Binning</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Text id="inputGroup-sizing-sm">stuff</InputGroup.Text>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>
            </div>
          </div>
        </Col>
      </Row>
    </Container >
  )
}

export default MainPage;