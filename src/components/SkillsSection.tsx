import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const skills = [
  // Programming
  { label: "Python", color: "#e88aab" },
  { label: "C/C++", color: "#d4a0c0" },
  { label: "JavaScript", color: "#f0b6c8" },
  { label: "MATLAB", color: "#c9a0d4" },
  { label: "HTML/CSS", color: "#e8a0b8" },
  // AI / ML
  { label: "TensorFlow", color: "#e88aab" },
  { label: "Scikit-learn", color: "#d4a0c0" },
  { label: "LangChain", color: "#f0b6c8" },
  { label: "Hugging Face", color: "#c9a0d4" },
  { label: "LLMs", color: "#e8a0b8" },
  { label: "RAG", color: "#e88aab" },
  { label: "YOLOv8", color: "#d4a0c0" },
  // Tools
  { label: "NumPy", color: "#f0b6c8" },
  { label: "Pandas", color: "#c9a0d4" },
  { label: "PostgreSQL", color: "#e8a0b8" },
  { label: "Git", color: "#e88aab" },
  { label: "Docker", color: "#d4a0c0" },
  { label: "FastAPI", color: "#f0b6c8" },
  { label: "OpenCV", color: "#c9a0d4" },
  { label: "Streamlit", color: "#e8a0b8" },
];

interface SkillBubbleProps {
  label: string;
  color: string;
  position: [number, number, number];
  size: number;
}

function SkillBubble({ label, color, position, size }: SkillBubbleProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const hovered = useRef(false);
  const scaleTarget = useRef(1);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const target = hovered.current ? 1.2 : 1;
    scaleTarget.current = THREE.MathUtils.lerp(scaleTarget.current, target, delta * 5);
    meshRef.current.scale.setScalar(scaleTarget.current);
  });

  return (
    <Float
      speed={1.5 + Math.random()}
      rotationIntensity={0.3}
      floatIntensity={0.6 + Math.random() * 0.4}
      floatingRange={[-0.15, 0.15]}
    >
      <group ref={groupRef} position={position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => {
            hovered.current = true;
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            hovered.current = false;
            document.body.style.cursor = "auto";
          }}
        >
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.7}
            roughness={0.1}
            metalness={0.1}
            emissive={color}
            emissiveIntensity={0.15}
          />
        </mesh>
        <Text
          position={[0, 0, size + 0.02]}
          fontSize={size * 0.45}
          color="#4a2040"
          anchorX="center"
          anchorY="middle"
          maxWidth={size * 2.5}
          textAlign="center"
        >
          {label}
        </Text>
      </group>
    </Float>
  );
}

function generatePositions(count: number, cols: number): [number, number, number][] {
  const positions: [number, number, number][] = [];
  const spacingX = 1.6;
  const spacingY = 1.5;
  const rows = Math.ceil(count / cols);

  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const itemsInRow = Math.min(cols, count - row * cols);
    const offsetX = -((itemsInRow - 1) * spacingX) / 2;
    const offsetY = ((rows - 1) * spacingY) / 2;

    positions.push([
      offsetX + col * spacingX + (Math.random() - 0.5) * 0.3,
      offsetY - row * spacingY + (Math.random() - 0.5) * 0.3,
      (Math.random() - 0.5) * 0.5,
    ]);
  }
  return positions;
}

function SkillsScene() {
  const positions = useMemo(() => generatePositions(skills.length, 5), []);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffd4e5" />
      <pointLight position={[-3, 3, 2]} intensity={0.4} color="#e8a0d0" />

      {skills.map((skill, i) => (
        <SkillBubble
          key={skill.label}
          label={skill.label}
          color={skill.color}
          position={positions[i]}
          size={0.5}
        />
      ))}
    </>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-secondary/30">
    <div className="container max-w-5xl">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4"
      >
        Technical <span className="gradient-text">Skills</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-muted-foreground mb-8 max-w-md mx-auto"
      >
        Hover over the bubbles to explore my tech stack
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full h-[400px] sm:h-[500px] lg:h-[550px] glass-card overflow-hidden"
      >
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Loading 3D skills…
            </div>
          }
        >
          <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
          >
            <SkillsScene />
          </Canvas>
        </Suspense>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
