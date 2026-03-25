"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Stars } from "@react-three/drei";

// The ParticleGalaxy component generates a stunning, non-geometric swirling nebula 
// combining AI Data Science points and Space Exploration aesthetics.
function ParticleGalaxy({ activeSection }: { activeSection: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 20000; // High density for a rich, beautiful look
  
  const color1 = new THREE.Color("#00d4ff"); // AI Cyan
  const color2 = new THREE.Color("#7c3aed"); // Data Science Purple
  const color3 = new THREE.Color("#f59e0b"); // Robotics / Defense Amber

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Mathematical Spiral Galaxy Generation
      const radius = Math.random() * 20; // Radius up to 20 units
      const branchAngle = (i % 3) * ((2 * Math.PI) / 3); // 3 spiral arms
      const spinAngle = radius * 0.4; // Twist factor tighter near core
      
      // Pow(random) clusters more particles near the center of the arm
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 3;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 3;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 3;
      
      const angle = branchAngle + spinAngle;
      
      const x = Math.cos(angle) * radius + randomX;
      // Flattens out vertically towards the edges, making a realistic disc
      const y = randomY * Math.max(0.1, (1 - radius * 0.05)); 
      const z = Math.sin(angle) * radius + randomZ;
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Thematic Color mapping: Inner core is Amber, Mid is Cyan, Outer is Purple
      const mixedColor = color1.clone();
      if (radius < 5) {
        // Blends from Amber to Cyan
        mixedColor.lerp(color3, 1 - radius / 5);
      } else {
        // Blends from Cyan to Deep Purple
        mixedColor.lerp(color2, Math.min(1, (radius - 5) / 15));
      }
      
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [count]);

  const targetCamPos = useRef(new THREE.Vector3(0, 5, 25));

  useFrame((state, delta) => {
    // Smoother, sweeping cinematic camera movement across the galaxy based on scroll
    if (activeSection === 0) { 
      targetCamPos.current.set(0, 4, 25);
    } else if (activeSection === 1 || activeSection === 2) { 
      targetCamPos.current.set(12, 8, 18);
    } else if (activeSection === 3 || activeSection === 4) { 
      targetCamPos.current.set(-12, -2, 15);
    } else { 
      targetCamPos.current.set(0, -6, 22);
    }
    
    state.camera.position.lerp(targetCamPos.current, delta * 1.0);
    // Always look at the core of the galaxy
    state.camera.lookAt(0, 0, 0);

    if (pointsRef.current) {
      // Rotate the entire galaxy slowly continuously
      pointsRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      {/* Additive Blending makes overlapping particles glow brightly together like plasma/stars */}
      <pointsMaterial 
         size={0.08} 
         vertexColors 
         transparent 
         opacity={0.9} 
         sizeAttenuation 
         blending={THREE.AdditiveBlending} 
         depthWrite={false} 
      />
    </points>
  );
}

export default function ThreeCanvasScene({ activeSection }: { activeSection: number }) {
  return (
    <Canvas camera={{ position: [0, 5, 25], fov: 60 }} dpr={[1, 2]}>
      {/* Deep Space Background */}
      <color attach="background" args={['#030712']} />
      <fog attach="fog" args={['#030712', 15, 45]} />
      
      {/* Background ambient far-distanced stars */}
      <Stars radius={150} depth={50} count={6000} factor={4} saturation={0} fade speed={0.5} />
      
      {/* The massive spinning AI/Data/Space Galaxy */}
      <ParticleGalaxy activeSection={activeSection} />
    </Canvas>
  );
}
