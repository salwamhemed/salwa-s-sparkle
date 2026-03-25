import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const skills = [
  // Programming
  { label: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { label: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { label: "MATLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" },
  { label: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  // AI / ML
  { label: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { label: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { label: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
  { label: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
  { label: "LLMs", icon: "https://cdn.simpleicons.org/openai/412991" },
  { label: "RAG", icon: "https://cdn.simpleicons.org/databricks/FF3621" },
  { label: "YOLOv8", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
  // Tools
  { label: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { label: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { label: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { label: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { label: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { label: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { label: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { label: "Streamlit", icon: "https://cdn.simpleicons.org/streamlit/FF4B4B" },
];

interface SkillBubbleProps {
  label: string;
  icon: string;
  position: [number, number, number];
}

function SkillBubble({ label, icon, position }: SkillBubbleProps) {
  return (
    <Float
      speed={2 + Math.random()}
      rotationIntensity={0.2}
      floatIntensity={1 + Math.random()}
      floatingRange={[-0.3, 0.3]}
      position={position}
    >
      <Html transform center zIndexRange={[100, 0]}>
        <div className="group flex flex-col items-center justify-center p-3 sm:p-4 w-24 h-24 sm:w-28 sm:h-28 bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2rem] hover:bg-card/70 hover:scale-110 transition-all duration-300 shadow-xl cursor-default pointer-events-auto">
          <img
            src={icon}
            alt={label}
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2 drop-shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300"
          />
          <span className="text-[10px] sm:text-xs font-bold text-foreground/90 whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity">
            {label}
          </span>
        </div>
      </Html>
    </Float>
  );
}

function generatePositions(count: number, cols: number): [number, number, number][] {
  const positions: [number, number, number][] = [];
  const spacingX = 2.8;
  const spacingY = 2.8;
  const rows = Math.ceil(count / cols);

  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const itemsInRow = Math.min(cols, count - row * cols);
    const offsetX = -((itemsInRow - 1) * spacingX) / 2;
    const offsetY = ((rows - 1) * spacingY) / 2;

    positions.push([
      offsetX + col * spacingX + (Math.random() - 0.5) * 0.5,
      offsetY - row * spacingY + (Math.random() - 0.5) * 0.5,
      (Math.random() - 0.5) * 2,
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
          icon={skill.icon}
          position={positions[i]}
        />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        maxPolarAngle={Math.PI / 2 + 0.2}
        minPolarAngle={Math.PI / 2 - 0.2}
      />
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
        Drag to rotate the constellation. Hover over the cards to explore my tech stack.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full h-[500px] sm:h-[600px] lg:h-[700px] glass-card overflow-hidden relative"
      >
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Loading 3D skills constellation…
            </div>
          }
        >
          <Canvas
            camera={{ position: [0, 0, 10], fov: 45 }}
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
