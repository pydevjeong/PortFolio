import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { useNavigate } from "react-router-dom";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const firstImg = useLoader(TextureLoader, "imgs/projectFirst.PNG");
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const naviagate =useNavigate()
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.002));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? 2 : 1}
      onClick={(event) => {
        console.log(event.object.uuid);
        naviagate('/firstProject')
        click(!clicked);
      }}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={firstImg} />
    </mesh>
  );
}
function Box2(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const second = useLoader(TextureLoader, "imgs/cardGame.PNG");
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const naviagate =useNavigate()
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.002));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? 2 : 1}
      onClick={(event) => {
        console.log(event.object.uuid);
        naviagate('/secondProject')
        click(!clicked);
      }}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={second} />
    </mesh>
  );
}
function Box3(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const third = useLoader(TextureLoader, "imgs/teamProject.jpeg");
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const naviagate =useNavigate()
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.002));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? 2 : 1}
      onClick={(event) => {
        console.log(event.object.uuid);
        naviagate('/thirdProject')
        click(!clicked);
      }}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={third} />
    </mesh>
  );
}

export default function GalleryThreeD() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box2 position={[2, 0, 0]} />
      <Box3 position={[-1.2, 2.2, 0]} />
      <OrbitControls />
    </Canvas>
  );
}
