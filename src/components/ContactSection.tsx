import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-sm tracking-wide text-primary mb-4 font-medium">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl text-foreground mb-6">
            Get in touch
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            If you'd like to get in touch, you can reach me at the email address below.
          </p>
          <a
            href="mailto:adamsmith@example.com"
            className="text-primary hover:underline text-lg font-medium"
          >
            adamsmith@example.com
          </a>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/adamsmithcd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/smifaye"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
