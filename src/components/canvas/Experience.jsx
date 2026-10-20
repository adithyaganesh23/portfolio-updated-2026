import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Room } from './Room'
import { Objects } from './Objects'

export const Experience = () => {

    return (
        <>
            <OrbitControls makeDefault />

            {/* SAFE MODE LIGHTING */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <group position={[0, -2, 0]}>
                <Room />
                <Objects />
            </group>

            {/* Debug marker still here to be safe */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshBasicMaterial color="red" wireframe />
            </mesh>
        </>
    )
}
