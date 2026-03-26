import { motion } from "framer-motion";

const skills = [
  { label: "Python", size: "lg" },
  { label: "TensorFlow", size: "md" },
  { label: "Scikit-learn", size: "md" },
  { label: "LangChain", size: "sm" },
  { label: "Hugging Face", size: "lg" },
  { label: "LLMs", size: "md" },
  { label: "RAG", size: "sm" },
  { label: "YOLOv8", size: "md" },
  { label: "C/C++", size: "sm" },
  { label: "JavaScript", size: "sm" },
  { label: "NumPy", size: "md" },
  { label: "Pandas", size: "lg" },
  { label: "PostgreSQL", size: "sm" },
  { label: "Git", size: "md" },
  { label: "Docker", size: "md" },
  { label: "FastAPI", size: "sm" },
  { label: "OpenCV", size: "lg" },
  { label: "Streamlit", size: "sm" },
  { label: "MATLAB", size: "sm" },
  { label: "HTML/CSS", size: "sm" },
];

const sizeMap = {
  sm: "w-20 h-20 text-[10px]",
  md: "w-24 h-24 text-xs",
  lg: "w-28 h-28 text-sm",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const floatAnimation = (i: number) => ({
  y: [0, -10 - (i % 4) * 3, 0],
  x: [0, (i % 2 === 0 ? 4 : -4), 0],
  transition: {
    duration: 3.5 + (i % 5) * 0.6,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: i * 0.2,
  },
});

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
        className="text-center text-muted-foreground mb-14 max-w-md mx-auto"
      >
        Hover over the bubbles to explore my tech stack.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <motion.div
              animate={floatAnimation(i)}
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 30px hsl(340 65% 65% / 0.4)",
              }}
              className={`${sizeMap[skill.size as keyof typeof sizeMap]} rounded-full flex items-center justify-center font-semibold text-primary cursor-default backdrop-blur-sm border border-primary/20 transition-all duration-300`}
              style={{
                background: "linear-gradient(135deg, hsl(340 65% 65% / 0.1), hsl(280 50% 75% / 0.15))",
              }}
            >
              {skill.label}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
