import React from 'react';
import {
  Offcanvas,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function OtherOffcan() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div >
      <Offcanvas placement={'left'} show={show} onHide={handleClose}
        style={{ background: "rgb(254, 254, 180)" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Take an exposure</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Use the Buttons and inputs below to take an exposure.
          <p />
          <Button variant="primary" onClick={handleClose}>
            Expose now
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

      <Button variant="primary" size="sm" onClick={handleShow} >
        Other
      </Button>
    </div >
  )
}

export default OtherOffcan;