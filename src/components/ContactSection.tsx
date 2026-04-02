import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Linkedin, Github, MessageCircle, Sparkles } from "lucide-react";
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
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative animated elements */}
      <motion.div
        className="absolute top-16 right-16 text-primary/10"
        animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <MessageCircle size={60} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-12 text-accent/15"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={44} />
      </motion.div>
      <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-primary/5 blur-3xl animate-float" />

      <div className="container max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary mb-3">
            <Send size={14} /> Say Hello
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>
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
            <motion.div
              className="glass-card p-6"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Mail className="text-primary" size={18} />
                </motion.div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:salwa.mhemed05@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    salwa.mhemed05@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <p className="text-sm font-medium text-foreground mb-4">Connect with me</p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
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
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
              />
              <textarea
                placeholder="Your Message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300 resize-none"
              />
              <motion.button
                type="submit"
                className="w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 text-primary-foreground hover:opacity-90 transition-opacity duration-300"
                style={{ background: "var(--gradient-primary)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
