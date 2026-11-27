"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function RotatingPlexus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Icosahedron representing molecular/cellular structure */}
      <icosahedronGeometry args={[2.2, 1]} />
      <meshStandardMaterial
        color="#0d9488"
        wireframe
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function HeroVisual() {
  return (
    <div className="w-full h-[450px] lg:h-[600px] flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 5, 2]} intensity={2} />
        <RotatingPlexus />
      </Canvas>
    </div>
  );
}
