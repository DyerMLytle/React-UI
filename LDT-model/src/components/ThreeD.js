import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from "three";

import './styles.css';


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

function Cylinder(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef()
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={2.0} >
      <cylinderGeometry args={[1, 1, 5, 32, 32, true]} />
      <meshStandardMaterial side={THREE.DoubleSide} color={'red'} />
    </mesh>
  )
}

function ThreeD() {
  return (
      <div id="threedcdiv" >
        <Canvas camera={{ fov: 75, position: [0, 0, 20] }}>
          {/* <color attach="background" args={["blue"]} /> */}
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Cylinder  position={[-1.2, 1, 0]} />
        </Canvas>
      </div>
  );
}

export default ThreeD;