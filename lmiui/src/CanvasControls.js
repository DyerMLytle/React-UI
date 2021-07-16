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
    ctx.imageSmoothingEnabled = false;
    const width = this.childRef.current.canvasRef.current.width;
    const height = this.childRef.current.canvasRef.current.height;
    var image1 = new Image();
    image1.src = im1;
    image1.onload = function () {
      var hRatio = width / image1.width;
      var vRatio = height / image1.height;
      var ratio = Math.min(hRatio, vRatio);
      ctx.drawImage(image1, 0, 0, image1.width, image1.height,
      0, 0, image1.width * ratio, image1.height * ratio);
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
