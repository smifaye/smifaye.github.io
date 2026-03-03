import { motion } from "framer-motion";

const projects = [
  {
    title: "CMS Migration",
    client: "Citizens Advice",
    description:
      "Worked in a multi-disciplinary team migrating from one CMS to another — collaborating closely with developers, researchers and other content designers to tackle migration challenges and improve the publishing experience.",
    tags: ["Collaboration", "CMS"],
  },
  {
    title: "Future-proofing Content",
    client: "Citizens Advice",
    description:
      "Designed a new content model that enables delivering content across many platforms at once. Structured content into reusable types and fields, making the organisation platform-agnostic and future-ready.",
    tags: ["Content Strategy", "Content Modelling"],
  },
  {
    title: "Reusable Content",
    client: "Citizens Advice",
    description:
      "Led a project to validate and implement reusable content principles — reducing duplication, saving time, and creating consistency across the website through a well-structured CMS approach.",
    tags: ["Content Strategy", "CMS"],
  },
  {
    title: "UX Content",
    client: "Citizens Advice",
    description:
      "Designed UX content for CMS features including preview tools, publishing workflows, and content type naming — ensuring the interface was clear, succinct, and didn't need extra training.",
    tags: ["UX Writing", "Product Design"],
  },
  {
    title: "Data Visualisation",
    client: "Citizens Advice",
    description:
      "Created Google Looker Studio reports for search analytics, page views and web stats — making complex data accessible and actionable for content designers and stakeholders.",
    tags: ["Data & Analytics", "Reporting"],
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
            Projects I've worked on
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
              className="bg-background rounded-2xl p-8 md:p-10 border border-border hover:border-primary/30 transition-colors group"
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
