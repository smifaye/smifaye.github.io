import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const WorkSection = () => {
  return (
    <section id="work" className="py-10 md:py-14 bg-card/40 relative overflow-hidden" aria-label="Selected work">

      <div className="container relative">
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
          <div className="flex gap-1 mt-5" aria-hidden="true">
            <div className="h-[3px] w-8 bg-primary rounded-full" />
            <div className="h-[3px] w-3 bg-secondary rounded-full" />
            <div className="h-[3px] w-3 bg-primary/30 rounded-full" />
          </div>
        </motion.div>

        <ul className="space-y-4 list-none">
          {caseStudies.map((project, i) => (
            <motion.li
              key={project.slug}
              className="list-none"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group block bg-background rounded-xl p-6 md:p-8 border border-border/40 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all"
                aria-label={`${project.title} — ${project.client}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-8">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" aria-hidden="true" />
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                        {project.client}
                      </p>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2 ml-5">
                      {project.title}
                      <ArrowUpRight
                        className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-1 max-w-lg text-sm ml-5">
                      {project.summary}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap md:justify-end flex-shrink-0 ml-5 md:ml-0" aria-label="Tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-accent/60 text-accent-foreground font-medium group-hover:bg-accent transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
