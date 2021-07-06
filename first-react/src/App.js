import React, { Component } from "react";
import Products from './Products';
// import { Button } from 'react-bootstrap';
// import Rating from './Rating';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return(
      <div>
        <Products />
      </div>
    );
  }
}

export default App;
