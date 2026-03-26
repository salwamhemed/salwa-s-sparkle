import { motion } from "framer-motion";
import { Brain, Eye, BarChart3, Code2, Globe, Wrench } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const skillCards = [
  { icon: Brain, title: "Machine Learning / NLP", desc: "Building intelligent models for text understanding, classification, and generation using transformers and LLMs." },
  { icon: Eye, title: "Computer Vision", desc: "Object detection, tracking, and real-time video analysis with YOLOv8 & OpenCV." },
  { icon: BarChart3, title: "Data Science & Analytics", desc: "Extracting insights from complex datasets using statistical analysis and visualization." },
  { icon: Code2, title: "Python Programming", desc: "Expert-level Python with NumPy, Pandas, Scikit-learn, TensorFlow & more." },
  { icon: Globe, title: "Web & App Development", desc: "Full-stack development with React.js, Node.js, FastAPI, and Streamlit." },
  { icon: Wrench, title: "Deployment & Tools", desc: "Docker, CI/CD, Git, PostgreSQL, and cloud deployment workflows." },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container max-w-5xl">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Get To Know <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card p-8 mb-14"
      >
        <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">About Me</h3>
        <p className="text-foreground/80 leading-relaxed">
          Hey! I'm Salwa, a 24-year-old from Tunisia and a recent graduate from INSAT, where I completed a 5-year Engineering degree in Industrial IT and Automation. I'm really passionate about Data and AI and love exploring different areas like Computer Vision, NLP, LLMs, Data Analysis, and Data Visualization. I enjoy building projects and learning new tools along the way. Here I've organized some of my main skills and interests into cards to make them easier to explore.
        </p>
      </motion.div>

      {/* Skill category cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCards.map((card, i) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="glass-card p-6 hover-lift group cursor-default"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <card.icon className="text-primary" size={26} />
            </div>
            <h4 className="font-heading font-semibold mb-2 text-foreground">{card.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
