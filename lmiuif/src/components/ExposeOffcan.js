import React from 'react';
import {
  Offcanvas,
  Button,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ExposeOffcan() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div>
      <Offcanvas placement={'end'} show={show} onHide={handleClose}
        style={{ background: "rgb(254, 254, 180)" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Take Exposures</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Use the Buttons and inputs below to take exposures.
          <p />
          <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Binning</InputGroup.Text>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Exposure Time</InputGroup.Text>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm"># of Exposures</InputGroup.Text>
              <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
          <Button variant="primary" onClick={handleClose}>
            Expose now
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

      <Button variant="primary" size="sm" onClick={handleShow} >
        Exposure
      </Button>
    </div >
  )
}

export default ExposeOffcan;