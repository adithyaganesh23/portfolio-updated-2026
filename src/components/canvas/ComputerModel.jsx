import React from 'react'
import { Float } from '@react-three/drei'

export const ComputerModel = (props) => {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group {...props}>
                {/* Monitor Housing */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[0.6, 0.5, 0.3]} />
                    <meshStandardMaterial color="#333" roughness={0.7} />
                </mesh>
                {/* Screen Bezel */}
                <mesh position={[0, 0, 0.155]}>
                    <planeGeometry args={[0.55, 0.4]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
                {/* Stand */}
                <mesh position={[0, -0.35, 0]}>
                    <cylinderGeometry args={[0.05, 0.08, 0.3]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                {/* Base */}
                <mesh position={[0, -0.5, 0]}>
                    <boxGeometry args={[0.4, 0.05, 0.4]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
            </group>
        </Float>
    )
}
