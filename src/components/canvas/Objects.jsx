import React, { useState, useEffect, useCallback, useContext } from 'react'
import { useTexture, Text, useGLTF, Float } from '@react-three/drei'
import { SectionContext } from '../../context'
import { Guitar } from './Guitar'
import { ClothesRack } from './ClothesRack'

// --- CRT SCREEN COMPONENT ---
const RetroScreen = ({ text }) => {
    return (
        <group position={[0, 0.05, 0.15]} rotation-x={-0.1}>
            {/* Screen Background */}
            <mesh position={[0, 0, -0.01]}>
                <planeGeometry args={[0.55, 0.4]} />
                <meshStandardMaterial color="#050505" emissive="#002200" roughness={0.2} />
            </mesh>
            {/* Text */}
            <Text
                position={[-0.25, 0.15, 0]}
                fontSize={0.03}
                color="#33ff00"
                anchorX="left"
                anchorY="top"
                font="https://fonts.gstatic.com/s/vt323/v17/pxiKyp0ihIEF2isF5Z7udE8.woff"
            >
                {text}
            </Text>
            {/* Scanline/Glass Effect */}
            <mesh position={[0, 0, 0.01]}>
                <planeGeometry args={[0.55, 0.4]} />
                <meshBasicMaterial color="#00ff00" transparent opacity={0.05} />
            </mesh>
        </group>
    )
}

const ComputerModel = () => {
    // Procedural "Retro" Computer
    return (
        <group>
            {/* Monitor Housing */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.6, 0.5, 0.3]} />
                <meshStandardMaterial color="#333" roughness={0.7} />
            </mesh>
            {/* Screen Bezel - Insight */}
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
    )
}

export const Objects = () => {
    const textures = useTexture({
        posterRock: '/assets/poster_rock.png',
        posterGame: '/assets/poster_gaming.png',
        invite: '/assets/invite.png',
    })

    const { setActiveSection } = useContext(SectionContext);
    const [hovered, setHover] = useState(null)

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered])

    // Retro Boot Sequence
    const [bootLines, setBootLines] = useState([
        'BBC Computer 32K', '', 'Acorn DFS', '', '>_'
    ]);

    return (
        <group>
            {/* DEBUG GREEN BOX - IF YOU SEE THIS, OBJECTS COMPONENT MOUNTED FINE */}
            <mesh position={[0, 2, 0]}>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshBasicMaterial color="green" wireframe />
            </mesh>

            {/* 1. DESK GROUP (UI/UX) */}
            {/* <group position={[0, 0, 0.5]}
                onClick={(e) => { e.stopPropagation(); setActiveSection('uiux'); }}
                onPointerOver={(e) => { e.stopPropagation(); setHover('uiux'); }}
                onPointerOut={() => setHover(null)}
            > */}
            {/* Table Top */}
            {/* <mesh position={[0, 1.45, 0]}> <boxGeometry args={[5, 0.1, 2]} /> <meshStandardMaterial color="#151515" roughness={0.2} metalness={0.5} /> </mesh> */}

            {/* Legs */}
            {/* <mesh position={[-2.4, 0.7, 0.9]}> <boxGeometry args={[0.1, 1.4, 0.1]} /> <meshStandardMaterial color="#111" /> </mesh>
                <mesh position={[2.4, 0.7, 0.9]}> <boxGeometry args={[0.1, 1.4, 0.1]} /> <meshStandardMaterial color="#111" /> </mesh>
                <mesh position={[-2.4, 0.7, -0.9]}> <boxGeometry args={[0.1, 1.4, 0.1]} /> <meshStandardMaterial color="#111" /> </mesh>
                <mesh position={[2.4, 0.7, -0.9]}> <boxGeometry args={[0.1, 1.4, 0.1]} /> <meshStandardMaterial color="#111" /> </mesh> */}

            {/* Computer */}
            {/* <group position={[0, 1.9, 0]}>
                    <ComputerModel />
                    <group position={[0, 0, 0.16]} scale={1}>
                        <RetroScreen text={bootLines.join('\n')} />
                    </group>
                </group> */}

            {/* Phone - CONTACT TRIGGER */}
            {/* <mesh
                    position={[1.5, 1.55, 0.5]}
                    rotation-y={-0.3}
                    onClick={(e) => { e.stopPropagation(); setActiveSection('contact'); }}
                    onPointerOver={(e) => { e.stopPropagation(); setHover('contact'); }}
                    onPointerOut={() => setHover(null)}
                >
                    <boxGeometry args={[0.3, 0.02, 0.6]} />
                    <meshStandardMaterial color="#222" roughness={0.2} />
                </mesh> */}

            {/* <Text position={[0, 2.7, 0.3]} fontSize={0.15} color="#555">
                    Click Objects to View
                </Text>
            </group> */}

            {/* 2. GUITAR (Hobbies) */}
            {/* <group position={[-3.5, 0, -4]}
                onClick={(e) => { e.stopPropagation(); setActiveSection('hobbies'); }}
                onPointerOver={(e) => { e.stopPropagation(); setHover('hobbies'); }}
                onPointerOut={() => setHover(null)}
            >
                <Guitar rotation-z={-0.2} scale={15.0} />
            </group> */}

            {/* 3. CLOTHES RACK (Apparels) */}
            {/* <group
                onClick={(e) => { e.stopPropagation(); setActiveSection('apparels'); }}
                onPointerOver={(e) => { e.stopPropagation(); setHover('apparels'); }}
                onPointerOut={() => setHover(null)}
            >
                <ClothesRack position={[3.5, 0, -4]} rotation-y={-0.2} scale={1.5} />
            </group> */}

            {/* 4. CORKBOARD (Graphic Design) */}
            {/* <group position={[0, 4.5, -4.95]}
                onClick={(e) => { e.stopPropagation(); setActiveSection('graphic'); }}
                onPointerOver={(e) => { e.stopPropagation(); setHover('graphic'); }}
                onPointerOut={() => setHover(null)}
            > */}
            {/* Just keeping this static since it's on a wall */}
            {/* <mesh> <boxGeometry args={[4, 2.5, 0.1]} /> <meshStandardMaterial color="#d4a373" /> </mesh> */}
            {/* Invites/Posters */}
            {/* <mesh position={[0, 0, 0.06]}>
                    <planeGeometry args={[1, 1.4]} />
                    <meshStandardMaterial map={textures.invite} />
                </mesh>
                <mesh position={[1.2, 0.5, 0.06]} rotation-z={0.1}> <boxGeometry args={[0.6, 0.6, 0.01]} /> <meshStandardMaterial color="#ffff88" /> </mesh>
                <mesh position={[-1.2, -0.5, 0.06]} rotation-z={-0.1}> <boxGeometry args={[0.6, 0.6, 0.01]} /> <meshStandardMaterial color="#ff8888" /> </mesh>
            </group> */}

            {/* 5. POSTERS (Decor only) */}
            {/* <group position={[-5, 4, -4.9]}>
                <mesh position={[0, 0, -0.01]}> <boxGeometry args={[1.6, 2.1, 0.05]} /> <meshStandardMaterial color="#111" /> </mesh>
                <mesh position={[0, 0, 0.02]}> <planeGeometry args={[1.5, 2]} /> <meshBasicMaterial map={textures.posterRock} /> </mesh>
            </group>
            <group position={[5, 4, -4.9]}>
                <mesh position={[0, 0, -0.01]}> <boxGeometry args={[1.6, 2.1, 0.06]} /> <meshStandardMaterial color="#111" /> </mesh>
                <mesh position={[0, 0, 0.03]}> <planeGeometry args={[1.5, 2]} /> <meshBasicMaterial map={textures.posterGame} /> </mesh>
            </group> */}
        </group >
    )
}
