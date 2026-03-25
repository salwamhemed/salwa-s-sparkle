import { motion } from "framer-motion";
import { GraduationCap, Award, Languages } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Advanced" },
  { name: "French", level: "Advanced" },
  { name: "German", level: "Beginner" },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container max-w-4xl">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A passionate engineer at the intersection of data science, machine learning, and intelligent automation.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-card p-8 mb-8"
      >
        <p className="text-foreground/80 leading-relaxed mb-6">
          I'm a final-year Industrial IT and Automation Engineering student at INSAT (2020–2025) with a deep
          passion for Machine Learning, NLP, and AI systems. My journey spans building robust data pipelines,
          evaluating models at scale, and crafting AI applications that bridge the gap between raw data and
          real-world impact.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          I thrive on solving complex problems — from structuring financial documents with LLMs to tracking
          objects in real-time with computer vision. Every project is an opportunity to learn, iterate, and
          push the boundaries of what's possible with data.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {[
          {
            icon: GraduationCap,
            title: "Education",
            text: "Industrial IT & Automation Engineering — INSAT",
          },
          {
            icon: Award,
            title: "Certification",
            text: "ML Specialization — Stanford & DeepLearning.AI",
          },
          {
            icon: Languages,
            title: "Languages",
            text: languages.map((l) => `${l.name} (${l.level})`).join(" · "),
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 * i }}
            className="glass-card p-6 text-center hover-lift"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <item.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
