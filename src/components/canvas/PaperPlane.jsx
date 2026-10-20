import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export const PaperPlane = (props) => {
    const { scene } = useGLTF('/assets/plane.glb')
    const ref = useRef()

    // Flight config
    const FLIGHT_INTERVAL = 10; // seconds
    const FLIGHT_DURATION = 4; // seconds flying

    // Path Curve (CatmullRom for smooth loop)
    // Points relative to room center roughly
    const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(1.8, 1.7, 1.0),   // Start (Desk/Phone)
        new THREE.Vector3(1.0, 3.0, 3.0),   // Up and out
        new THREE.Vector3(-3.0, 4.0, 2.0),  // High Left
        new THREE.Vector3(-4.0, 2.0, -3.0), // Back corner
        new THREE.Vector3(3.0, 1.5, -3.0),  // Right corner
        new THREE.Vector3(1.8, 1.7, 1.0)    // Return start
    ], true); // Closed loop

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const cycle = time % FLIGHT_INTERVAL; // 0 to 10

        if (cycle < FLIGHT_DURATION) {
            // FLYING PHASE (0s to 4s)
            const t = cycle / FLIGHT_DURATION; // 0 to 1

            // Get position along curve
            const position = curve.getPointAt(t);
            // Get tangent for rotation
            const tangent = curve.getTangentAt(t).normalize();

            ref.current.position.copy(position);

            // Look along tangent
            // We need to calculate a lookAt target slightly ahead
            const lookTarget = position.clone().add(tangent);
            ref.current.lookAt(lookTarget);

            // Add some banking (roll) based on curvature? 
            // Simplified: Roll towards center of turn. 
            // For now, lookAt is sufficient for direction, maybe manual roll.
            ref.current.rotateZ(Math.PI / -6); // Slight banking

        } else {
            // IDLE PHASE (4s to 10s)
            // Hover at start position
            const hoverTime = time;
            ref.current.position.set(
                1.8,
                1.7 + Math.sin(hoverTime * 2) * 0.05,
                1.0
            );
            // Reset rotation (Model dependent - usually forward is -Z or +Z)
            // Adjusting based on likely model orientation
            ref.current.rotation.set(0, -Math.PI / 2, 0);
            ref.current.rotateZ(Math.sin(hoverTime) * 0.1);
        }
    })

    return (
        <group ref={ref} {...props}>
            {/* Scale controlled by parent */}
            <primitive object={scene} />
        </group>
    )
}
