import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Noise } from '@react-three/postprocessing';
import * as THREE from 'three';

import './LandingGraphic.scss';
import WaveyMesh from '../WaveyMesh';

const LandingGraphic: React.FC = () => {
    return (
        <div className="LandingGraphicContainer">
            <Canvas className="LandingGraphic">
                <WaveyMesh />
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <PerspectiveCamera
                    makeDefault
                    fov={45}
                    aspect={window.screen.width / window.screen.height}
                    near={1}
                    far={1000}
                    position={new THREE.Vector3(10, 2, 7)}
                    rotation={new THREE.Euler(-0.7, -0.2, -0.2)}
                />
                <EffectComposer>
                    <Noise opacity={0.25} />
                </EffectComposer>
            </Canvas>
            <div className="LandingGraphicOverlay"></div>
        </div>
    );
};

export default LandingGraphic;
