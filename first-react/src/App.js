import React, { Component } from "react";
import Products from './Products';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    //const isValid = true;

    return(
      <div>
        <h1>My First React App!</h1>
        <Products />
        <Button variant="outline-primary" >Default</Button>
      </div>
    )
  }
}

export default App;
