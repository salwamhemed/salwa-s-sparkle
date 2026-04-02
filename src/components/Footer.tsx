import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border/50">
    <div className="container text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm text-muted-foreground inline-flex items-center gap-1.5"
      >
        © {new Date().getFullYear()} Salwa Mhemed. Built with
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Heart size={14} className="text-primary fill-primary" />
        </motion.span>
        & purpose.
      </motion.p>
    </div>
  </footer>
);

export default Footer;
