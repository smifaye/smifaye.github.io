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
          className="max-w-xl mx-auto"
        >
          <p className="text-sm tracking-wide text-primary mb-4 font-medium">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl text-foreground mb-6">
            Contact
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you would like to contact me, you can:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="mailto:smifaye@duck.com"
                className="text-primary hover:underline"
              >
                email me
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adam-smith-content-design/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                message me on LinkedIn
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
