import React, { Component } from 'react';
import Canvas from "./Canvas";
import im1 from "./assets/images/dumbbell-bw.jpg";

class CanvasControls extends Component {
  constructor(props) {
    super(props)
    this.childRef = React.createRef();
  }

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.childRef.current.canvasRef.current.getContext('2d');
    var image1 = new Image();
    image1.src = im1;
    image1.onload = function () {
      ctx.drawImage(image1, 0, 0);
    }
  }

  render() {
    return (
      <div>
        <Canvas ref={this.childRef} />
      </div>
    );
  }
}

export default CanvasControls;
