import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useSettings } from '../../context/SettingsContext';

export function CursorGlow() {
    const { reducedMotion } = useSettings();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Softer spring for a "delayed"/trailing feel
    const springConfig = { damping: 50, stiffness: 300, mass: 2 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    if (reducedMotion) return null;

    return (
        <motion.div
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
            }}
            className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none z-0 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 mix-blend-screen opacity-100"
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    );
}
