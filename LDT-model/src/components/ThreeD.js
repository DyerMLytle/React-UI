import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from "three";

import './styles.css';
import { Object3D } from 'three';


/* function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={active ? 2.0 : 1.0}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'red' : 'orange'} />
    </mesh>
  )
} */

var azimuth = 0;
var elevation = 45;

function azChange(event) {
  azimuth= event.target.value;
}

function elChange(event) {
  elevation = event.target.value;
}

function Cylinder(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef()
  const group = useRef()
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x = azimuth, ref.current.rotation.y = elevation))
  useFrame(state => {
    
    ref.current.position.x = -0.5
    ref.current.position.y = 5.0
    ref.current.position.z = -0.5
    group.current.position.y = -8.0
    group.current.rotation.y = azimuth * 0.0174533
    group.current.rotation.z = elevation * 0.0174533
    
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <object3D ref={group}>
    <mesh
      {...props}
      ref={ref}
      scale={2.0} >
      <cylinderGeometry  args={[1, 1, 5, 32, 32, true]} />
      <meshStandardMaterial side={THREE.DoubleSide} color={'red'} />
    </mesh>
    
    </object3D>
    
  )
}

function ThreeD() {
  return (
      <div id="threedcdiv" >
        <Canvas camera={{ fov: 75, position: [0, 0, 20] }}>
          {/* <color attach="background" args={["blue"]} /> */}
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Cylinder  position={[-10.2, -1, 0]} />
        </Canvas>
        <input type="range" id="azimuth" name="azimuth" onChange={azChange} min="0" max="360"></input>
        &nbsp; &nbsp; &nbsp;
        <input type="range" id="elevation" name="elevation" onChange={elChange} min="0" max="90"></input>
      </div>
  );
}

export default ThreeD;