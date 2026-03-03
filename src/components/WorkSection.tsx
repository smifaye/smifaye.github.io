import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const WorkSection = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-secondary text-secondary-foreground" aria-label="Selected work">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="h-1 w-12 bg-primary rounded-full mb-6" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl text-secondary-foreground">
            Projects I've worked on
          </h2>
        </motion.div>

        <div className="space-y-6" role="list">
          {caseStudies.map((project, i) => (
            <motion.article
              key={project.slug}
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="block bg-background rounded-2xl p-8 md:p-10 border border-border/20 hover:shadow-lg transition-all group"
                aria-label={`${project.title} — ${project.client}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">{project.client}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" aria-hidden="true" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {project.summary}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap md:justify-end" aria-label="Tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium"
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
