import { motion } from "framer-motion";

const skills = [
  { label: "UX writing", desc: "Microcopy and interface content", accent: "bg-primary", icon: "✏️" },
  { label: "Content strategy", desc: "Models and systems", accent: "bg-secondary", icon: "🧭" },
  { label: "Data and analytics", desc: "Insights-driven decisions", accent: "bg-secondary", icon: "📊" },
  { label: "Accessibility", desc: "Plain English and inclusive design", accent: "bg-primary", icon: "♿" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden" aria-label="About me">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-px h-full bg-foreground" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-foreground" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-foreground" />
      </div>

      <div className="container relative">
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
            <div className="flex gap-1 mb-6" aria-hidden="true">
              <div className="h-[3px] w-8 bg-primary rounded-full" />
              <div className="h-[3px] w-3 bg-secondary rounded-full" />
              <div className="h-[3px] w-3 bg-primary/30 rounded-full" />
            </div>
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
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                role="listitem"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card rounded-xl p-5 border border-border/60 relative overflow-hidden group cursor-default"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${skill.accent} transition-all group-hover:h-1.5`} aria-hidden="true" />
                <span className="text-lg mb-2 block" aria-hidden="true">{skill.icon}</span>
                <h3 className="text-sm font-bold text-foreground mb-1">{skill.label}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
