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
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl text-foreground mb-6">
            Let's work together
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Whether you need help with content design, UX writing, or content strategy — 
            I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://smifaye.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium tracking-wide hover:opacity-90 transition-opacity text-sm"
            >
              Visit My Site
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
