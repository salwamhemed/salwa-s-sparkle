import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Send, Download } from "lucide-react";
import heroPhoto from "@/assets/hero.png";

const roles = [
  "Machine Learning Engineer",
  "Data Scientist",
  "AI Enthusiast",
  "NLP Specialist",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container grid md:grid-cols-2 gap-12 items-center py-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Welcome to my portfolio{" "}
            <motion.span
              className="inline-block origin-[70%_70%]"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
            >
              👋
            </motion.span>
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="gradient-text">Salwa Mhemed</span>
          </h1>

          {/* Animated role text */}
          <div className="h-8 sm:h-10 mb-2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl text-primary font-medium"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-muted-foreground max-w-md mx-auto md:mx-0 mb-8">
            Building intelligent systems from data to impact — passionate about NLP, AI applications, and turning complex data into meaningful solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-primary-foreground hover:scale-105 transition-all duration-300"
              style={{ background: "var(--gradient-primary)" }}
            >
              Download Resume <Download size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary/5 hover:scale-105 transition-all duration-300"
            >
              Contact Me <Send size={16} />
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
            <img
              src={heroPhoto}
              alt="Salwa Mhemed"
              width={768}
              height={960}
              className="relative w-full h-full object-cover rounded-full border-4 border-card shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
