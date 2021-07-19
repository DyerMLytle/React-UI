import React from 'react';
import {
  Offcanvas,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FocusOffcan() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div style={{
      paddingTop: "10px", paddingBottom: "10px",
      paddingLeft: "10px", paddingRight: "10px"
    }}>
      <Offcanvas placement={'bottom'} show={show} onHide={handleClose}
        style={{ background: "rgb(254, 254, 180)" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Focus the Telescope</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Use the Buttons and inputs below to run a focus loop.
          <p />
          <Button variant="primary" onClick={handleClose}>
            Focus now
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

      <Button variant="primary" size="sm" onClick={handleShow} >
        Focus
      </Button>
    </div >
  )
}

export default FocusOffcan;