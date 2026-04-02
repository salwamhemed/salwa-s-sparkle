import { motion } from "framer-motion";
import {
  Brain, Eye, BarChart3, Code2, Globe, Wrench,
  FileCode, Database, GitBranch, Terminal, Cpu, Layers,
  Sparkles
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

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl animate-float" />
    <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float-slow" />
    <motion.div
      className="absolute top-20 left-1/4 text-primary/10"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <Sparkles size={40} />
    </motion.div>

    <div className="container max-w-5xl relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4"
      >
        <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary mb-3">
          <Sparkles size={14} /> My Toolkit
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold">
          Technical <span className="gradient-text">Skills</span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-muted-foreground mb-12 max-w-md mx-auto"
      >
        Technologies and tools I work with.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.label}
              variants={cardVariant}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group glass-card p-5 flex flex-col items-center gap-3 text-center cursor-default transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
            >
              <motion.div
                className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Icon size={20} className="text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-foreground">{skill.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
