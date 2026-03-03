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
          className="max-w-xl mx-auto"
        >
          <div className="h-1 w-12 bg-primary rounded-full mb-6" aria-hidden="true" />
          <p className="text-sm tracking-wide text-secondary mb-4 font-semibold">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl text-foreground mb-6">
            Get in touch
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you would like to contact me, you can:
          </p>
          <ul className="space-y-3 list-disc pl-6">
            <li className="text-muted-foreground">
              <a
                href="mailto:smifaye@duck.com"
                className="text-primary hover:underline font-medium"
              >
                email me
              </a>
            </li>
            <li className="text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/adam-smith-content-design/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                message me on LinkedIn
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
