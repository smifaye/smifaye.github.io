import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { workFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter } = parseFrontmatter(workFile);

const WorkSection = () => {
  return (
    <section id="work" className="py-16 md:py-24 bg-foreground text-background relative overflow-hidden" aria-label="Selected work">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-background tracking-tighter font-display">
            {frontmatter.heading}
          </h2>
          <div className="w-12 h-[3px] bg-primary mt-6" aria-hidden="true" />
        </motion.div>

        <ul className="space-y-0 list-none border-t border-background/20">
          {caseStudies.map((project, i) => (
            <motion.li
              key={project.slug}
              className="list-none"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group block py-8 border-b border-background/20 transition-colors hover:pl-4"
                aria-label={`${project.title} — ${project.client}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-8">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-background/50 font-bold font-display mb-2">
                      {project.client}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-background group-hover:text-primary transition-colors flex items-center gap-3 font-display tracking-tight">
                      {project.title}
                      <ArrowUpRight
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-background/60 leading-relaxed mt-2 max-w-lg text-sm">
                      {project.summary}
                    </p>
                  </div>
                  <ul className="flex gap-2 flex-wrap md:justify-end flex-shrink-0 list-none" aria-label="Tags" role="list">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs px-3 py-1 border border-background/30 text-background/70 font-medium uppercase tracking-wider font-display"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkSection;
