import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// Simple Audio Synthesis for Strum
let audioCtx = null;
const playStrum = () => {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;
    // Play a E major chord approx
    const freqs = [82.41, 123.47, 164.81, 220.00, 329.63, 659.25];

    freqs.forEach((f, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth'; // Richer sound
        osc.frequency.value = f;

        gain.gain.setValueAtTime(0.1, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 1.5);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 2);
    })
}

export const Guitar = (props) => {
    const { scene } = useGLTF('/assets/acoustic_guitar.glb')
    const ref = useRef()
    const [hovered, setHover] = useState(false)

    return (
        <group
            {...props}
            ref={ref}
            onClick={(e) => { e.stopPropagation(); playStrum(); }}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            {/* Scale: Models vary wildy. Increased scale for visibility */}
            <primitive
                object={scene}
                scale={hovered ? 15.5 : 15.0} // Feedback animation
                rotation={[0, 0, 0]} // Reset rotation to default, adjust if needed
            />
        </group>
    )
}
