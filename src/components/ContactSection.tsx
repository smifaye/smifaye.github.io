import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { contactFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter, content } = parseFrontmatter(contactFile);

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative bg-accent" aria-label="Contact information">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl md:ml-[8.333%]"
        >
          <h2 className="text-5xl md:text-7xl text-foreground mb-5">
            {frontmatter.heading}
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-10 text-lg">
            {content}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href={`mailto:${frontmatter.email}`}
              className="group flex items-center gap-4 bg-primary text-primary-foreground rounded-xl p-5 border border-primary hover:bg-secondary hover:border-secondary transition-colors"
            >
              <span className="w-10 h-10 rounded-full border border-primary-foreground/40 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-sm">{frontmatter.emailLabel}</p>
                <p className="text-xs opacity-75 break-all">{frontmatter.email}</p>
              </div>
            </a>
            <a
              href={frontmatter.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-card rounded-xl p-5 border border-primary hover:bg-background transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm">{frontmatter.linkedinLabel}</p>
                <p className="text-xs text-muted-foreground">{frontmatter.linkedinDescription}</p>
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
