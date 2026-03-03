import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-20 relative" aria-label="Contact information">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl text-foreground mb-3 tracking-tight">
            Get in touch
          </h2>
          <div className="flex gap-1 mb-6" aria-hidden="true">
            <div className="h-[3px] w-8 bg-primary rounded-full" />
            <div className="h-[3px] w-3 bg-secondary rounded-full" />
            <div className="h-[3px] w-3 bg-primary/30 rounded-full" />
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            If you would like to contact me, you can:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="mailto:smifaye@duck.com"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group flex items-center gap-4 bg-card rounded-xl p-5 border border-border/60 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all flex-1"
            >
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm">Email me</p>
                <p className="text-xs text-muted-foreground">smifaye@duck.com</p>
              </div>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/adam-smith-content-design/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group flex items-center gap-4 bg-card rounded-xl p-5 border border-border/60 hover:border-secondary/30 hover:shadow-md hover:shadow-secondary/5 transition-all flex-1"
            >
              <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                <Linkedin className="w-4 h-4 text-secondary" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm">LinkedIn</p>
                <p className="text-xs text-muted-foreground">Message me there</p>
              </div>
              <span className="sr-only"> (opens in new tab)</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
