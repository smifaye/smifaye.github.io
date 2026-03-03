import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card/40" aria-label="About me">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl mb-8 text-foreground tracking-tight">
              7+ years designing content that works
            </h2>
            <div className="h-[2px] w-16 bg-secondary mb-8" aria-hidden="true" />
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                I'm a content designer based in London with over 7 years of experience 
                in the public and charity sectors.
              </p>
              <p>
                I create user-centred content that puts user needs first. I'm passionate 
                about accessibility, plain English and content that helps people do what 
                they need to.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
            role="list"
            aria-label="Skills"
          >
            {[
              { label: "UX writing", desc: "Microcopy and interface content", accent: "bg-primary" },
              { label: "Content strategy", desc: "Models and systems", accent: "bg-secondary" },
              { label: "Data and analytics", desc: "Insights-driven decisions", accent: "bg-secondary" },
              { label: "Accessibility", desc: "Plain English and inclusive design", accent: "bg-primary" },
            ].map((skill) => (
              <div
                key={skill.label}
                role="listitem"
                className="bg-background rounded-2xl p-6 border border-border/60 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${skill.accent}`} aria-hidden="true" />
                <h3 className="text-sm font-bold text-foreground mb-1 mt-2">{skill.label}</h3>
                <p className="text-sm text-muted-foreground leading-snug">{skill.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
