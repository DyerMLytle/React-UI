import React, { Component } from "react";
import MainPage from './MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return(
      <div style={{ background: "rgb(254, 179, 71)" }}>
        <MainPage />
      </div>
    );
  }
}

export default App;
