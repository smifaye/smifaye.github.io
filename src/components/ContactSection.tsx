import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { contactFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter, content } = parseFrontmatter(contactFile);

const ContactSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden" aria-label="Contact information">
      <div className="grid md:grid-cols-2 min-h-[60vh]">
        {/* Left: solid accent block */}
        <div className="bg-foreground flex items-center justify-center p-12 md:p-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl text-background tracking-[-0.03em] font-display leading-[0.95]">
              {frontmatter.heading}
            </h2>
            <p className="text-background/50 leading-relaxed mt-6 text-sm max-w-sm">
              {content}
            </p>
          </motion.div>
        </div>

        {/* Right: contact methods */}
        <div className="bg-card flex items-center p-12 md:p-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 w-full max-w-sm"
          >
            <a
              href={`mailto:${frontmatter.email}`}
              className="group flex items-center gap-5 p-6 bg-background border border-border hover:border-primary transition-colors"
            >
              <span className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-foreground text-sm font-display uppercase tracking-[0.1em]">{frontmatter.emailLabel}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">{frontmatter.email}</p>
              </div>
            </a>
            <a
              href={frontmatter.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 p-6 bg-background border border-border hover:border-primary transition-colors"
            >
              <span className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-foreground text-sm font-display uppercase tracking-[0.1em]">{frontmatter.linkedinLabel}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">{frontmatter.linkedinDescription}</p>
              </div>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
