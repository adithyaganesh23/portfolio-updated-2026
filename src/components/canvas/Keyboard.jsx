import React, { useState, useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

// --- AUDIO SYSTEM ---
let audioCtx = null;
const initAudio = () => {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

const playThock = () => {
    const ctx = initAudio();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
}

const Key = ({ position, label, width = 0.08, isPressed, fontSize = 0.035, onClick }) => {
    const groupRef = useRef();
    const targetY = isPressed ? -0.04 : 0;

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, delta * 30);
        }
    });

    const keyColor = isPressed ? "#ffb703" : "#eeeeee";
    const legendColor = isPressed ? "#000000" : "#333333";

    return (
        <group position={position} onClick={(e) => {
            e.stopPropagation();
            onClick && onClick();
        }}>
            <group ref={groupRef}>
                <RoundedBox args={[width, 0.04, 0.08]} radius={0.015} smoothness={4}>
                    <meshStandardMaterial
                        color={keyColor}
                        roughness={0.4}
                        emissive={isPressed ? "#ffb703" : "#000000"}
                        emissiveIntensity={isPressed ? 2 : 0}
                    />
                </RoundedBox>
                <Text
                    position={[0, 0.021, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    fontSize={fontSize}
                    color={legendColor}
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                >
                    {label.toUpperCase()}
                </Text>
            </group>
            {/* Switch housing */}
            <mesh position={[0, -0.03, 0]}>
                <boxGeometry args={[width - 0.02, 0.02, 0.06]} />
                <meshStandardMaterial color="#222" />
            </mesh>
        </group>
    )
}

export const Keyboard = ({ onKeyPress, ...props }) => {
    const [pressedKeys, setPressedKeys] = useState({});

    useEffect(() => {
        const enableAudio = () => initAudio();
        window.addEventListener('click', enableAudio);

        const handleDown = (e) => {
            const key = e.key;
            const lowerKey = key.toLowerCase();

            if (!pressedKeys[lowerKey]) {
                playThock();
                setPressedKeys(prev => ({ ...prev, [lowerKey]: true }));

                // Bubble up event
                if (onKeyPress) onKeyPress(key);
            }
        };

        const handleUp = (e) => {
            const lowerKey = e.key.toLowerCase();
            setPressedKeys(prev => ({ ...prev, [lowerKey]: false }));
        };

        window.addEventListener('keydown', handleDown);
        window.addEventListener('keyup', handleUp);

        return () => {
            window.removeEventListener('click', enableAudio);
            window.removeEventListener('keydown', handleDown);
            window.removeEventListener('keyup', handleUp);
        };
    }, [pressedKeys, onKeyPress]);

    // Handle virtual clicks
    const handleVirtualClick = (key) => {
        playThock();
        if (onKeyPress) onKeyPress(key);
        // Visual press effect
        setPressedKeys(prev => ({ ...prev, [key.toLowerCase()]: true }));
        setTimeout(() => {
            setPressedKeys(prev => ({ ...prev, [key.toLowerCase()]: false }));
        }, 100);
    };

    // Layout
    const layout = [
        [
            { label: 'Esc', width: 0.1, key: 'Escape' },
            { label: '1', width: 0.08, key: '1' }, { label: '2', width: 0.08, key: '2' }, { label: '3', width: 0.08, key: '3' },
            { label: '4', width: 0.08, key: '4' }, { label: '5', width: 0.08, key: '5' }, { label: '6', width: 0.08, key: '6' },
            { label: '7', width: 0.08, key: '7' }, { label: '8', width: 0.08, key: '8' }, { label: '9', width: 0.08, key: '9' },
            { label: '0', width: 0.08, key: '0' }, { label: '-', width: 0.08, key: '-' }, { label: '=', width: 0.08, key: '=' },
            { label: 'Bksp', width: 0.16, key: 'Backspace' }
        ],
        [
            { label: 'Tab', width: 0.12, key: 'Tab' },
            { label: 'Q', width: 0.08, key: 'q' }, { label: 'W', width: 0.08, key: 'w' }, { label: 'E', width: 0.08, key: 'e' },
            { label: 'R', width: 0.08, key: 'r' }, { label: 'T', width: 0.08, key: 't' }, { label: 'Y', width: 0.08, key: 'y' },
            { label: 'U', width: 0.08, key: 'u' }, { label: 'I', width: 0.08, key: 'i' }, { label: 'O', width: 0.08, key: 'o' },
            { label: 'P', width: 0.08, key: 'p' }, { label: '[', width: 0.08, key: '[' }, { label: ']', width: 0.08, key: ']' },
            { label: '\\', width: 0.12, key: '\\' }
        ],
        [
            { label: 'Caps', width: 0.14, key: 'CapsLock' },
            { label: 'A', width: 0.08, key: 'a' }, { label: 'S', width: 0.08, key: 's' }, { label: 'D', width: 0.08, key: 'd' },
            { label: 'F', width: 0.08, key: 'f' }, { label: 'G', width: 0.08, key: 'g' }, { label: 'H', width: 0.08, key: 'h' },
            { label: 'J', width: 0.08, key: 'j' }, { label: 'K', width: 0.08, key: 'k' }, { label: 'L', width: 0.08, key: 'l' },
            { label: ';', width: 0.08, key: ';' }, { label: "'", width: 0.08, key: "'" },
            { label: 'Enter', width: 0.18, key: 'Enter' }
        ],
        [
            { label: 'Shift', width: 0.19, key: 'Shift' },
            { label: 'Z', width: 0.08, key: 'z' }, { label: 'X', width: 0.08, key: 'x' }, { label: 'C', width: 0.08, key: 'c' },
            { label: 'V', width: 0.08, key: 'v' }, { label: 'B', width: 0.08, key: 'b' }, { label: 'N', width: 0.08, key: 'n' },
            { label: 'M', width: 0.08, key: 'm' }, { label: ',', width: 0.08, key: ',' }, { label: '.', width: 0.08, key: '.' },
            { label: '/', width: 0.08, key: '/' },
            { label: 'Shift', width: 0.20, key: 'Shift' },
        ],
        [
            { label: 'Ctrl', width: 0.1, key: 'Control' },
            { label: 'Win', width: 0.1, key: 'Meta' },
            { label: 'Alt', width: 0.1, key: 'Alt' },
            { label: '', width: 0.5, key: ' ' }, // Space
            { label: 'Alt', width: 0.1, key: 'Alt' },
            { label: 'Fn', width: 0.1, key: 'Fn' },
            { label: 'Ctrl', width: 0.1, key: 'Control' },
            { label: '<', width: 0.08, key: 'ArrowLeft' },
            { label: 'v', width: 0.08, key: 'ArrowDown' },
            { label: '>', width: 0.08, key: 'ArrowRight' },
        ]
    ];

    return (
        <group {...props}>
            {/* Chassis */}
            <RoundedBox args={[1.5, 0.08, 0.9]} radius={0.02} smoothness={4} position={[0.7, -0.06, 0.25]}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.6} roughness={0.2} />
            </RoundedBox>

            {/* Generate Keys */}
            {layout.map((row, rowIndex) => {
                let currentX = 0;
                return row.map((keyConfig, colIndex) => {
                    const posX = currentX + (keyConfig.width / 2);
                    currentX += keyConfig.width + 0.01;

                    const isPressed = pressedKeys[keyConfig.key.toLowerCase()];
                    return (
                        <Key
                            key={`${rowIndex}-${colIndex}`}
                            label={keyConfig.label}
                            width={keyConfig.width}
                            position={[posX, 0.04, rowIndex * 0.18]}
                            isPressed={isPressed}
                            fontSize={keyConfig.label.length > 1 ? 0.025 : 0.035}
                            onClick={() => handleVirtualClick(keyConfig.key)}
                        />
                    )
                });
            })}
        </group>
    )
}
