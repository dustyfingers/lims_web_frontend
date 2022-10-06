import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
    uniform float u_time;

    varying float vZVal;

    void main() {
        vec4 modelPos = modelMatrix * vec4(position, 1.0);

        modelPos.y += sin(modelPos.x * 3.3 + u_time * 0.9145975) * 0.2;
        modelPos.y += sin(modelPos.z * 5.0 + u_time * 0.725) * 0.2;

        vZVal = modelPos.y;

        vec4 viewPos = viewMatrix * modelPos;
        vec4 projectedPos = projectionMatrix * viewPos;

        gl_Position = projectedPos;
    }
`;

const fragmentShader = `
    uniform vec3 u_colorA;
    uniform vec3 u_colorB;

    varying float vZVal;

    void main() {
        vec3 color = mix(u_colorA, u_colorB, vZVal * 2.0 + 0.5);
        gl_FragColor = vec4(color, 1.0);
    }
`;

const WaveyMesh: React.FC = () => {
    const mesh = useRef<THREE.Mesh>(new THREE.Mesh());
    const uniforms = useMemo(
        () => ({
            u_time: {
                value: 0.0,
            },
            u_colorA: { value: new THREE.Color('#C9F5D9') },
            u_colorB: { value: new THREE.Color('#8FDDDF') },
        }),
        []
    );
    useFrame(state => {
        if (mesh.current) {
            const { clock } = state;
            const material = mesh.current.material as THREE.ShaderMaterial;
            material.uniforms.u_time.value = clock.getElapsedTime();
        }
    });
    return (
        <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <planeGeometry args={[100, 100, 1024, 1024]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

export default WaveyMesh;
