import { motion } from "framer-motion";
import { ExternalLink, Brain, MessageSquare, Video, BarChart3 } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Churn Prediction Model",
    desc: "End-to-end ML pipeline for customer churn prediction with automated deployment.",
    tech: ["FastAPI", "Docker", "GitHub Actions", "Scikit-learn"],
  },
  {
    icon: Brain,
    title: "AI/NLP Anime Analysis",
    desc: "Zero-shot classification and named entity recognition for anime content analysis with chatbot integration.",
    tech: ["Hugging Face", "spaCy", "NetworkX", "LLaMA"],
  },
  {
    icon: MessageSquare,
    title: "Multi-PDF Conversational AI",
    desc: "RAG-powered PDF Q&A system with conversational memory for multi-document querying.",
    tech: ["LangChain", "RAG", "Streamlit", "OpenAI"],
  },
  {
    icon: Video,
    title: "Tennis Analysis System",
    desc: "Real-time player and ball tracking with performance analytics using computer vision.",
    tech: ["YOLOv8", "OpenCV", "Python"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container">
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

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="glass-card p-6 group hover-lift cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <p.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
