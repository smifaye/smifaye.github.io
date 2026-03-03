import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32" aria-label="Contact information">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-3xl md:text-5xl text-foreground mb-4 tracking-tight">
            Get in touch
          </h2>
          <div className="h-[2px] w-16 bg-primary mb-8" aria-hidden="true" />
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
            If you would like to contact me, you can:
          </p>
          <div className="space-y-4">
            <a
              href="mailto:smifaye@duck.com"
              className="group flex items-center gap-3 text-foreground font-medium hover:text-primary transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="text-primary text-sm" aria-hidden="true">@</span>
              </span>
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/adam-smith-content-design/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-foreground font-medium hover:text-primary transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                <span className="text-secondary text-sm font-bold" aria-hidden="true">in</span>
              </span>
              Message me on LinkedIn
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
