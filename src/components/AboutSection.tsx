import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-card/40" aria-label="About me">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-5 text-foreground tracking-tight">
              7+ years designing content that works
            </h2>
            <div className="h-[2px] w-16 bg-secondary mb-5" aria-hidden="true" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
            className="grid grid-cols-2 gap-3"
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
                className="bg-background rounded-xl p-5 border border-border/60 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${skill.accent}`} aria-hidden="true" />
                <h3 className="text-sm font-bold text-foreground mb-1 mt-1">{skill.label}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{skill.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
