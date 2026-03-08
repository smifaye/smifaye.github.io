import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import { workFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter } = parseFrontmatter(workFile);

const WorkSection = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden" aria-label="Selected work">
      {/* Large decorative number */}
      <div className="absolute -right-8 top-8 text-[25vw] font-display font-bold text-primary-foreground/[0.08] leading-none pointer-events-none select-none" aria-hidden="true">
        W
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary-foreground/50 mb-4">Selected projects</p>
          <h2 className="text-5xl md:text-7xl text-primary-foreground tracking-[-0.03em] font-display">
            {frontmatter.heading}
          </h2>
        </motion.div>

        <div className="space-y-0">
          {caseStudies.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group block py-10 border-t border-primary-foreground/20 last:border-b transition-all"
                aria-label={`${project.title} — ${project.client}`}
              >
                <div className="grid md:grid-cols-12 gap-4 items-baseline">
                  <span className="md:col-span-1 text-xs font-mono text-primary-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-7">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/50 font-display mb-2">
                      {project.client}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground group-hover:translate-x-3 transition-transform font-display tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="md:col-span-4 flex gap-2 flex-wrap md:justify-end">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 border border-primary-foreground/30 text-primary-foreground/60 uppercase tracking-[0.1em] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
