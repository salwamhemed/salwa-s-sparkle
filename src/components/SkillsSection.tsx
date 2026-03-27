import { motion } from "framer-motion";
import {
  Brain, Eye, BarChart3, Code2, Globe, Wrench,
  FileCode, Database, GitBranch, Terminal, Cpu, Layers
} from "lucide-react";

const skills = [
  { label: "Python", icon: FileCode },
  { label: "TensorFlow", icon: Cpu },
  { label: "Scikit-learn", icon: Brain },
  { label: "LangChain", icon: Layers },
  { label: "Hugging Face", icon: Brain },
  { label: "LLMs", icon: Terminal },
  { label: "RAG", icon: Layers },
  { label: "YOLOv8", icon: Eye },
  { label: "C/C++", icon: Code2 },
  { label: "JavaScript", icon: Globe },
  { label: "NumPy", icon: BarChart3 },
  { label: "Pandas", icon: BarChart3 },
  { label: "PostgreSQL", icon: Database },
  { label: "Git", icon: GitBranch },
  { label: "Docker", icon: Wrench },
  { label: "FastAPI", icon: Globe },
  { label: "OpenCV", icon: Eye },
  { label: "Streamlit", icon: Globe },
  { label: "MATLAB", icon: Cpu },
  { label: "HTML/CSS", icon: Code2 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
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
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4"
      >
        Technical <span className="gradient-text">Skills</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-muted-foreground mb-12 max-w-md mx-auto"
      >
        Technologies and tools I work with.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group glass-card p-5 flex flex-col items-center gap-3 text-center cursor-default hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon size={20} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{skill.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SkillsSection;
