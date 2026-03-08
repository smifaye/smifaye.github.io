import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { contactFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter, content } = parseFrontmatter(contactFile);

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground relative" aria-label="Contact information">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl text-primary-foreground mb-4 tracking-tighter font-display">
            {frontmatter.heading}
          </h2>
          <div className="w-12 h-[3px] bg-primary-foreground/40 mb-8" aria-hidden="true" />
          <p className="text-primary-foreground/80 leading-relaxed mb-10">
            {content}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${frontmatter.email}`}
              className="group flex items-center gap-4 bg-primary-foreground/10 border-2 border-primary-foreground/20 p-5 hover:bg-primary-foreground/20 transition-all flex-1"
            >
              <span className="w-10 h-10 border-2 border-primary-foreground/40 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-primary-foreground text-sm font-display uppercase tracking-wider">{frontmatter.emailLabel}</p>
                <p className="text-xs text-primary-foreground/70">{frontmatter.email}</p>
              </div>
            </a>
            <a
              href={frontmatter.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-primary-foreground/10 border-2 border-primary-foreground/20 p-5 hover:bg-primary-foreground/20 transition-all flex-1"
            >
              <span className="w-10 h-10 border-2 border-primary-foreground/40 flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-primary-foreground text-sm font-display uppercase tracking-wider">{frontmatter.linkedinLabel}</p>
                <p className="text-xs text-primary-foreground/70">{frontmatter.linkedinDescription}</p>
              </div>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
