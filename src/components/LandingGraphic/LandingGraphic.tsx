import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

import './LandingGraphic.scss';
import WaveyMesh from '../WaveyMesh';

const LandingGraphic: React.FC = () => {
    return (
        <Canvas className="LandingGraphic">
            <WaveyMesh />
            {/* <gridHelper /> */}
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <PerspectiveCamera
                makeDefault
                fov={45}
                aspect={window.screen.width / window.screen.height}
                near={1}
                far={1000}
                lookAt={() => new THREE.Vector3(0, 0, 0)}
                // zoom={100}
                position={new THREE.Vector3(0, 3, 10)}
            />
        </Canvas>
    );
};

export default LandingGraphic;
