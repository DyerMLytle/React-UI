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
          width={500}
          height={500}
          ref={this.canvasRef} >
        </canvas>
      </div>
    );
  }
}

export default Canvas;