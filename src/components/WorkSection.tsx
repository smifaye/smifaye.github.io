import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const WorkSection = () => {
  return (
    <section id="work" className="py-16 md:py-20" aria-label="Selected work">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl text-foreground tracking-tight">
            Selected work
          </h2>
          <div className="h-[2px] w-16 bg-primary mt-4" aria-hidden="true" />
        </motion.div>

        <div className="divide-y divide-border" role="list">
          {caseStudies.map((project, i) => (
            <motion.article
              key={project.slug}
              role="listitem"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group block py-6 md:py-8 -mx-4 px-4 rounded-xl hover:bg-card/60 transition-colors"
                aria-label={`${project.title} — ${project.client}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-8">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                      {project.client}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-1 max-w-lg text-sm">
                      {project.summary}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap md:justify-end flex-shrink-0" aria-label="Tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
