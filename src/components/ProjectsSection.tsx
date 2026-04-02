import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket } from "lucide-react";

const projects = [
  {
    title: "Churn Prediction Model",
    desc: "End-to-end ML pipeline for customer churn prediction with automated deployment via CI/CD.",
    tech: ["FastAPI", "Docker", "GitHub Actions", "Scikit-learn"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI/NLP Anime Analysis",
    desc: "Zero-shot classification and named entity recognition for anime content analysis with chatbot integration.",
    tech: ["Hugging Face", "spaCy", "NetworkX", "LLaMA"],
    github: "#",
    demo: "#",
  },
  {
    title: "Multi-PDF Conversational AI",
    desc: "RAG-powered PDF Q&A system with conversational memory for multi-document querying.",
    tech: ["LangChain", "RAG", "Streamlit", "OpenAI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Tennis Analysis System",
    desc: "Real-time player and ball tracking with performance analytics using computer vision.",
    tech: ["YOLOv8", "OpenCV", "Python"],
    github: "#",
    demo: "#",
  },
  {
    title: "Financial Document Structuring",
    desc: "NLP pipeline for extracting and structuring data from complex financial documents using LLMs.",
    tech: ["PyMuPDF", "Hugging Face", "LLaMA", "Python"],
    github: "#",
    demo: "#",
  },
  {
    title: "Drone Simulation Pipeline",
    desc: "Data pipelines for drone simulation inputs with telemetry analysis and model evaluation.",
    tech: ["Python", "Pandas", "NumPy", "Data Analysis"],
    github: "#",
    demo: "#",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-1/4 right-0 w-60 h-60 rounded-full bg-primary/5 blur-3xl animate-float" />

    <div className="container max-w-6xl relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary mb-3">
          <Rocket size={14} /> Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={cardVariant}
            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
            whileHover={{ y: -8 }}
            className="glass-card group overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
          >
            {/* Image placeholder */}
            <div className="relative h-44 overflow-hidden bg-secondary/50">
              <motion.div
                className="absolute inset-0"
                style={{ background: "var(--gradient-primary)", opacity: 0.15 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  className="text-5xl font-heading font-bold text-primary/20"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring" }}
                >
                  {p.title.charAt(0)}
                </motion.span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <motion.a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 2 }}
                >
                  <Github size={14} /> GitHub
                </motion.a>
                <motion.a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 2 }}
                >
                  <ExternalLink size={14} /> Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
