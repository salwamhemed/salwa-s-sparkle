import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="container max-w-4xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-heading font-bold text-center mb-12"
      >
        <span className="gradient-text">Education</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card p-8 flex flex-col sm:flex-row items-center gap-6 hover-lift"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <GraduationCap className="text-primary" size={30} />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="font-heading font-semibold text-lg mb-1">
            National Institute of Applied Sciences and Technology (INSAT)
          </h3>
          <p className="text-primary font-medium text-sm mb-2">
            Industrial IT and Automation Engineering Degree
          </p>
          <p className="text-sm text-muted-foreground">2020 – 2025</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
