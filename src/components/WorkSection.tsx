import { motion } from "framer-motion";

const projects = [
  {
    title: "Onboarding Redesign",
    client: "Fintech Startup",
    description: "Rewrote the entire onboarding flow, reducing drop-off by 34% through clearer microcopy and progressive disclosure.",
    tags: ["UX Writing", "User Research"],
  },
  {
    title: "Design System Voice",
    client: "E-commerce Platform",
    description: "Established brand voice guidelines and content patterns for a design system serving 12 product teams.",
    tags: ["Content Strategy", "Brand Voice"],
  },
  {
    title: "Error State Overhaul",
    client: "Health Tech",
    description: "Transformed 200+ error messages from technical jargon into empathetic, actionable guidance for patients.",
    tags: ["UX Writing", "Accessibility"],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl text-foreground">
            Projects I'm proud of
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background rounded-2xl p-8 md:p-10 border border-border hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">{project.client}</p>
                  <h3 className="text-xl md:text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap md:justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
