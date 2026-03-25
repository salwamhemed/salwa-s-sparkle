import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Unisphere GmbH",
    period: "Apr 2025 – Sep 2025",
    location: "Germany",
    points: [
      "Built Python pipelines for Trajeanie drone simulation inputs",
      "Worked with telemetry data from Skyflow, ANWB, RigiTech",
      "Conducted sensitivity analysis and model evaluation",
      "Identified biases and improved performance models",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Dydon AI",
    period: "Jun 2024 – Mar 2025",
    location: "",
    points: [
      "NLP research for financial document processing",
      "Built AI pipelines using PyMuPDF, Hugging Face Transformers, LLaMA",
      "Improved extraction and structuring of financial data",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Aures Group",
    period: "Jun 2023 – Jul 2023",
    location: "",
    points: [
      "Built frontend interfaces with React.js",
      "Developed backend services using Node.js + MongoDB",
      "Implemented real-time updates for inventory and orders",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ExperienceSection = () => (
  <section id="experience" className="py-24 bg-secondary/30">
    <div className="container max-w-4xl">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12"
      >
        Work <span className="gradient-text">Experience</span>
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="relative sm:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background hidden sm:block" />

              <div className="glass-card p-6 hover-lift">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                    <p className="text-primary font-medium text-sm">
                      {exp.company}
                      {exp.location && ` · ${exp.location}`}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
