import React, { useMemo } from 'react'
import * as THREE from 'three'

const Tshirt = ({ color, position, rotation }) => {
    const shape = useMemo(() => {
        const s = new THREE.Shape();
        // Simple T-Shirt Silhouette
        s.moveTo(-0.4, 0.8);
        s.lineTo(-0.7, 0.6);
        s.lineTo(-0.6, 0.4);
        s.lineTo(-0.4, 0.5);
        s.lineTo(-0.4, -0.6);
        s.lineTo(0.4, -0.6);
        s.lineTo(0.4, 0.5);
        s.lineTo(0.6, 0.4);
        s.lineTo(0.7, 0.6);
        s.lineTo(0.4, 0.8);

        // Neck
        s.bezierCurveTo(0.2, 0.7, -0.2, 0.7, -0.4, 0.8);
        return s;
    }, []);

    const extrudeSettings = { depth: 0.1, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelSegments: 2 };

    return (
        <group position={position} rotation={rotation}>
            {/* Hanger Hook (Rotated to sit on bar) */}
            <mesh position={[0, 0.9, 0]} rotation-y={Math.PI / 2}>
                <torusGeometry args={[0.06, 0.01, 8, 16, Math.PI]} />
                <meshStandardMaterial color="silver" />
            </mesh>
            {/* Hanger Triangle */}
            <mesh position={[0, 0.75, 0]}>
                <cylinderGeometry args={[0.01, 0.01, 0.8]} rotation={[0, 0, Math.PI / 2]} />
                <meshStandardMaterial color="#8d6e63" />
            </mesh>
            <mesh position={[-0.4, 0.65, 0]} rotation={[0, 0, -0.5]}>
                <cylinderGeometry args={[0.01, 0.01, 0.5]} />
                <meshStandardMaterial color="#8d6e63" />
            </mesh>
            <mesh position={[0.4, 0.65, 0]} rotation={[0, 0, 0.5]}>
                <cylinderGeometry args={[0.01, 0.01, 0.5]} />
                <meshStandardMaterial color="#8d6e63" />
            </mesh>

            {/* The Shirt */}
            <mesh position={[0, 0, 0]}>
                <extrudeGeometry args={[shape, extrudeSettings]} />
                <meshStandardMaterial color={color} roughness={0.8} />
            </mesh>
        </group>
    )
}

export const ClothesRack = (props) => {
    return (
        <group {...props}>
            {/* --- RACK FRAME --- */}
            {/* Vertical Poles */}
            <mesh position={[-1.5, 2, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 4]} />
                <meshStandardMaterial color="#e0e0e0" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[1.5, 2, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 4]} />
                <meshStandardMaterial color="#e0e0e0" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Horizontal Bar */}
            <mesh position={[0, 3.8, 0]} rotation-z={Math.PI / 2}>
                <cylinderGeometry args={[0.04, 0.04, 3.2]} />
                <meshStandardMaterial color="#e0e0e0" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Feet */}
            <mesh position={[-1.5, 0, 0]} rotation-x={Math.PI / 2}>
                <cylinderGeometry args={[0.06, 0.06, 0.8]} />
                <meshStandardMaterial color="#333" />
            </mesh>
            <mesh position={[1.5, 0, 0]} rotation-x={Math.PI / 2}>
                <cylinderGeometry args={[0.06, 0.06, 0.8]} />
                <meshStandardMaterial color="#333" />
            </mesh>

            {/* --- SHIRTS --- */}
            {/* Rotated 90 deg (PI/2) to hang sideways */}
            {/* Reduced spacing since they are sideways now, or kept same for air */}
            <Tshirt color="#ef5350" position={[-0.8, 2.8, 0]} rotation={[0, Math.PI / 2 + 0.1, 0]} />
            <Tshirt color="#42a5f5" position={[-0.2, 2.8, 0]} rotation={[0, Math.PI / 2 - 0.1, 0]} />
            <Tshirt color="#ffca28" position={[0.4, 2.8, 0]} rotation={[0, Math.PI / 2 + 0.05, 0]} />
            <Tshirt color="#66bb6a" position={[1.0, 2.8, 0]} rotation={[0, Math.PI / 2 - 0.05, 0]} />
        </group>
    )
}
