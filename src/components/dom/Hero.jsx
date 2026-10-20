import React from 'react'
import { Canvas } from '@react-three/fiber'
import { View, OrbitControls, Environment } from '@react-three/drei'
import { ComputerModel } from '../canvas/ComputerModel'

export const Hero = () => {
    return (
        <section className="h-screen w-full flex flex-col md:flex-row items-center justify-center relative p-8">
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex justify-center z-10">
                <div className="glass p-12 max-w-xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                        Creative <span className="text-gradient">Developer</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                        Building immersive digital experiences with code and design.
                        Specializing in 3D web technologies and modern interfaces.
                    </p>
                    <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
                        View Projects
                    </button>
                </div>
            </div>

            {/* Right 3D Content */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-full relative">
                <View className="absolute inset-0 w-full h-full">
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Environment preset="city" />

                    <ComputerModel scale={2.5} rotation={[0, -0.5, 0]} />

                    <OrbitControls makeDefault enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </View>
            </div>
        </section>
    )
}
