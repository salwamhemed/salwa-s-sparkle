import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container max-w-6xl">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12"
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 * i }}
            className="glass-card group hover-lift overflow-hidden"
          >
            {/* Image placeholder */}
            <div className="relative h-44 overflow-hidden bg-secondary/50">
              <div
                className="absolute inset-0 group-hover:scale-110 transition-transform duration-500"
                style={{ background: "var(--gradient-primary)", opacity: 0.15 }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-heading font-bold text-primary/20">
                  {p.title.charAt(0)}
                </span>
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
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={14} /> GitHub
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
