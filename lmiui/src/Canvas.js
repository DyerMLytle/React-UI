import React, { Component } from 'react';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  render() {
    return (
      <div>
        <canvas
          width={1000}
          height={1000}
          rdata-paper-resize="true"
          ref={this.canvasRef} >
        </canvas>
      </div>
    );
  }
}

export default Canvas;