import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { contactFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter, content } = parseFrontmatter(contactFile);

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 md:py-14 relative" aria-label="Contact information">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl text-foreground mb-3 tracking-tight">
            {frontmatter.heading}
          </h2>
          <div className="flex gap-1.5 mb-6" aria-hidden="true">
            <div className="h-1 w-10 bg-amber rounded-full" />
            <div className="h-1 w-5 bg-primary rounded-full" />
            <div className="h-1 w-3 bg-teal rounded-full" />
            <div className="h-1 w-2 bg-plum rounded-full" />
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {content}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${frontmatter.email}`}
              className="group flex items-center gap-4 bg-card rounded-lg p-5 border-2 border-amber/20 hover:border-amber/50 hover:shadow-lg hover:shadow-amber/15 transition-all flex-1"
            >
              <span className="w-10 h-10 rounded-md bg-amber/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber/30 transition-colors">
                <Mail className="w-4 h-4 text-amber" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm">{frontmatter.emailLabel}</p>
                <p className="text-xs text-muted-foreground">{frontmatter.email}</p>
              </div>
            </a>
            <a
              href={frontmatter.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-card rounded-lg p-5 border-2 border-teal/20 hover:border-teal/50 hover:shadow-lg hover:shadow-teal/15 transition-all flex-1"
            >
              <span className="w-10 h-10 rounded-md bg-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/30 transition-colors">
                <Linkedin className="w-4 h-4 text-teal" aria-hidden="true" />
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
