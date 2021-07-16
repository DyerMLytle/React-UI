import React from 'react';
import Canvas from "./Canvas";
import im1 from "./assets/images/dumbbell-bw.jpg";

function CanvasControls() {

  var cRef = React.useRef(null);
  var childRef = React.useRef(null);

  React.useEffect(() => {
    cRef = childRef.current;
    updateCanvas();
  }, [])

  const updateCanvas = () => {
    const ctx = cRef.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const width = cRef.width;
    const height = cRef.height;
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

  return (
    <div>
      <Canvas forwardedRef={childRef} />
    </div>
  );

}

export default CanvasControls;
