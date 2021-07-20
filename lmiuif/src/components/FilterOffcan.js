import React from 'react';
import {
  Offcanvas,
  Button,
  ButtonGroup,
  Form,
  ToggleButton
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function FilterOffcan() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [checked, setChecked] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState('1');

  const [checked2, setChecked2] = React.useState(false);
  const [radioValue2, setRadioValue2] = React.useState('1');


  const radios1 = [
    { name: 'OPEN', value: '1' },
    { name: 'SL-u', value: '2' },
    { name: 'SL-g', value: '3' },
    { name: 'SL-r', value: '4' },
    { name: 'SL-i', value: '5' },
    { name: 'SL-z', value: '6' },
    { name: 'CN', value: '7' },
    { name: 'RC', value: '8' },
    { name: 'VR', value: '9' },
    { name: 'C2', value: '10' },
  ];

  const radios2 = [
    { name: 'OPEN', value: '11' },
    { name: 'DARK', value: '12' },
    { name: 'OH', value: '13' },
    { name: 'UC', value: '14' },
    { name: 'BC', value: '15' },
    { name: 'I', value: '16' },
    { name: 'R', value: '17' },
    { name: 'V', value: '18' },
    { name: 'B', value: '19' },
    { name: 'U', value: '20' },
  ];

  return (

    <div>
      <Offcanvas placement={'end'} show={show} onHide={handleClose}
        style={{ background: "rgb(254, 254, 180)" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Set Filter Wheels</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Use the Buttons and inputs below to set up the filter wheels.
          <p />
          <Form.Label htmlFor="basic-url">Lower Filter Wheel (FW1)</Form.Label>
          <ButtonGroup>
            {radios1.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
                size={'xsm'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          <p />
          <Form.Label htmlFor="basic-url">Upper Filter Wheel (FW2)</Form.Label>
          <ButtonGroup>
            {radios2.map((radio2, idx) => (
              <ToggleButton
                key={idx}
                id={`radio2-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
                size={'xsm'}
                name="radio"
                value={radio2.value}
                checked={radioValue2 === radio2.value}
                onChange={(e) => setRadioValue2(e.currentTarget.value)}
              >
                {radio2.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          <p />
          <Button variant="primary" onClick={handleClose}>
            Set filters now
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

      <Button variant="primary" size="sm" onClick={handleShow} >
        Filters
      </Button>
    </div >
  )
}

export default FilterOffcan;