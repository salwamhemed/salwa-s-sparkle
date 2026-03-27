import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container max-w-5xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-10"
        >
          Have a question or want to collaborate? Feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:salwa.mhemed05@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    salwa.mhemed05@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-sm font-medium text-foreground mb-4">Connect with me</p>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
              <textarea
                placeholder="Your Message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 text-primary-foreground hover:opacity-90 transition-opacity duration-300"
                style={{ background: "var(--gradient-primary)" }}
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
