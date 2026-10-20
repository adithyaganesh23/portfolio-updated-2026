import { MeshReflectorMaterial } from '@react-three/drei'

export const Room = () => {
    return (
        <group>
            {/* Floor - Reverted for Debugging */}
            <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[50, 50]} />
                <meshStandardMaterial color="#222" roughness={0.8} />
                {/* <MeshReflectorMaterial ... /> */}
            </mesh>

            {/* Back Wall */}
            <mesh position={[0, 5, -5]} receiveShadow>
                <planeGeometry args={[20, 10]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* Left Wall */}
            <mesh position={[-10, 5, 0]} rotation-y={Math.PI / 2} receiveShadow>
                <planeGeometry args={[20, 10]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>

            {/* Right Wall */}
            <mesh position={[10, 5, 0]} rotation-y={-Math.PI / 2} receiveShadow>
                <planeGeometry args={[20, 10]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>
        </group>
    )
}
