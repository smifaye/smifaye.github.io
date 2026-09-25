import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { workFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter } = parseFrontmatter(workFile);

const WorkSection = () => {
  return (
    <section id="work" className="py-20 md:py-28 relative overflow-hidden bg-primary text-primary-foreground" aria-label="Selected work">

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:grid md:grid-cols-12"
        >
          <h2 className="text-4xl md:text-6xl text-primary-foreground md:col-span-6 md:col-start-2">
            {frontmatter.heading}
          </h2>
        </motion.div>

        <ul className="space-y-3 list-none md:ml-[8.333%]">
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
                className="group block rounded-xl p-6 md:p-8 border border-primary-foreground/25 hover:bg-primary-foreground hover:text-primary transition-colors"
                aria-label={`${project.title} — ${project.client}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-8">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-secondary group-hover:text-secondary" aria-hidden="true">0{i + 1}</span>
                      <p className="text-xs uppercase tracking-widest text-primary-foreground/70 group-hover:text-primary/70 font-semibold">
                        {project.client}
                      </p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary-foreground group-hover:text-primary transition-colors flex items-center gap-2 ml-8">
                      {project.title}
                      <ArrowUpRight
                        className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-primary-foreground/70 group-hover:text-primary/70 leading-relaxed mt-2 max-w-lg text-sm ml-8">
                      {project.summary}
                    </p>
                  </div>
                  <ul className="flex gap-2 flex-wrap md:justify-end flex-shrink-0 ml-5 md:ml-0 list-none" aria-label="Tags" role="list">
                    {project.tags.map((tag) => {
                      return (
                        <li
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full font-medium transition-colors bg-primary-foreground/10 text-primary-foreground group-hover:bg-primary/10 group-hover:text-primary"
                        >
                          {tag}
                        </li>
                      );
                    })}
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
