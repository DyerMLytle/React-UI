import React, { Component } from 'react';
import Canvas from "./Canvas";
import im1 from "./assets/images/dumbbell-bw.jpg";

class CanvasControls extends Component {
  constructor(props) {
    super(props)
    this.childRef = React.createRef();
  }

  clickDraw = () => {
    this.ctx.drawImage(this.image, 0, 0);
  }

  componentDidMount() {
    this.ctx = this.childRef.current.canvasRef.current.getContext('2d');
    this.image = new Image();
    this.image.src = im1;
  }

  render() {
    return (
      <div>
        <button onClick={this.clickDraw}> Draw </button>
        <Canvas ref={this.childRef} />
      </div>
    );
  }
}

export default CanvasControls;
