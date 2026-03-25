import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming",
    skills: ["Python", "C/C++", "JavaScript", "MATLAB", "HTML/CSS"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "Scikit-learn", "LangChain", "Hugging Face", "LLMs", "RAG", "YOLOv8"],
  },
  {
    title: "Tools & Technologies",
    skills: ["NumPy", "Pandas", "Matplotlib", "PostgreSQL", "Git", "OpenCV", "Docker", "FastAPI", "Gradio", "Streamlit", "CI/CD"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-secondary/30">
    <div className="container max-w-4xl">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12"
      >
        Technical <span className="gradient-text">Skills</span>
      </motion.h2>

      <div className="grid gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="glass-card p-6"
          >
            <h3 className="font-heading font-semibold mb-4 text-primary">{cat.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
