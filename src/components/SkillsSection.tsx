import { motion } from "framer-motion";

const skills = [
  { label: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { label: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { label: "MATLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" },
  { label: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { label: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { label: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { label: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
  { label: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
  { label: "LLMs", icon: "https://cdn.simpleicons.org/openai/412991" },
  { label: "RAG", icon: "https://cdn.simpleicons.org/databricks/FF3621" },
  { label: "YOLOv8", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
  { label: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { label: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { label: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { label: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { label: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { label: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { label: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { label: "Streamlit", icon: "https://cdn.simpleicons.org/streamlit/FF4B4B" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const floatAnimation = (i: number) => ({
  y: [0, -8, 0],
  rotate: [0, i % 2 === 0 ? 3 : -3, 0],
  transition: {
    duration: 3 + (i % 3) * 0.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: i * 0.15,
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
        className="text-center text-muted-foreground mb-12 max-w-md mx-auto"
      >
        Hover over the icons to explore my tech stack.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
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
              whileHover={{ scale: 1.2, boxShadow: "0 0 24px hsl(340 65% 65% / 0.35)" }}
              className="group flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl glass-card cursor-default hover-lift"
            >
              <img
                src={skill.icon}
                alt={skill.label}
                className="w-9 h-9 sm:w-11 sm:h-11 object-contain mb-1.5 drop-shadow-md group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-[9px] sm:text-[10px] font-semibold text-muted-foreground whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                {skill.label}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
