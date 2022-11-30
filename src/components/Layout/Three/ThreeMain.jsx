import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GltfModel from './ThreeDMesh';
import './ThreeD.css'

const ThreeMain = ({ modelPath, scale = 10, position = [-200, -200, -200] }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[0, 0, 10]} angle={0.6} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls/>
      </Suspense>
    </Canvas>
  );
};

export default ThreeMain;