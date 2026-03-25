import { useTheme } from "next-themes";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function SunMoon({ isDark }: { isDark: boolean }) {
  const group = useRef<THREE.Group>(null);
  const sunMaterial = useRef<THREE.MeshStandardMaterial>(null);
  const moonMaterial = useRef<THREE.MeshStandardMaterial>(null);

  // Animate rotation based on theme
  useFrame((_, delta) => {
    if (group.current) {
      const targetRotationY = isDark ? Math.PI : 0;
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotationY,
        delta * 5
      );
    }
    
    // Animate material opacities to smoothly transition
    if (sunMaterial.current && moonMaterial.current) {
      sunMaterial.current.opacity = THREE.MathUtils.lerp(
        sunMaterial.current.opacity,
        isDark ? 0 : 1,
        delta * 5
      );
      moonMaterial.current.opacity = THREE.MathUtils.lerp(
        moonMaterial.current.opacity,
        isDark ? 1 : 0,
        delta * 5
      );
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Sun (Light Mode) */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial
            ref={sunMaterial}
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={0.5}
            transparent
            opacity={1}
          />
          {/* Sun rays */}
          {[...Array(8)].map((_, i) => (
            <mesh key={i} position={[Math.cos((i * Math.PI) / 4) * 1.5, Math.sin((i * Math.PI) / 4) * 1.5, 0]} rotation={[0, 0, (i * Math.PI) / 4]}>
              <cylinderGeometry args={[0.1, 0.1, 0.5, 8]} />
              <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.5} transparent opacity={sunMaterial.current?.opacity || 1} />
            </mesh>
          ))}
        </mesh>

        {/* Moon (Dark Mode) */}
        <mesh position={[0, 0, 0]} rotation={[0, Math.PI, 0]}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial
            ref={moonMaterial}
            color="#e2e8f0"
            emissive="#94a3b8"
            emissiveIntensity={0.2}
            transparent
            opacity={0}
            roughness={0.8}
          />
          {/* Moon craters */}
          <mesh position={[0.4, 0.4, 1]} rotation={[0.2, -0.2, 0]}>
            <circleGeometry args={[0.3, 16]} />
            <meshStandardMaterial color="#94a3b8" transparent opacity={moonMaterial.current?.opacity || 0} />
          </mesh>
          <mesh position={[-0.5, -0.2, 1.1]} rotation={[-0.2, 0.2, 0]}>
            <circleGeometry args={[0.4, 16]} />
            <meshStandardMaterial color="#94a3b8" transparent opacity={moonMaterial.current?.opacity || 0} />
          </mesh>
          <mesh position={[0.2, -0.6, 1.05]} rotation={[-0.3, -0.1, 0]}>
            <circleGeometry args={[0.2, 16]} />
            <meshStandardMaterial color="#94a3b8" transparent opacity={moonMaterial.current?.opacity || 0} />
          </mesh>
        </mesh>
      </Float>
    </group>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-accent/50 transition-colors group cursor-pointer"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 z-10" />
      <div className="w-full h-full pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: "transparent" }}>
          <ambientLight intensity={isDark ? 0.2 : 0.8} />
          <directionalLight position={[2, 2, 2]} intensity={isDark ? 0.5 : 1.5} color={isDark ? "#e2e8f0" : "#fbbf24"} />
          <SunMoon isDark={isDark} />
        </Canvas>
      </div>
    </button>
  );
}
