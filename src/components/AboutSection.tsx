import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32" aria-label="About me">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-1 w-12 bg-secondary rounded-full mb-6" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
              7+ years designing content that works
            </h2>
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
            role="list"
            aria-label="Skills"
          >
            {[
              { label: "UX writing", desc: "Microcopy and interface content", color: "border-l-primary" },
              { label: "Content strategy", desc: "Models and systems", color: "border-l-secondary" },
              { label: "Data and analytics", desc: "Insights-driven decisions", color: "border-l-secondary" },
              { label: "Accessibility", desc: "Plain English and inclusive design", color: "border-l-primary" },
            ].map((skill) => (
              <div
                key={skill.label}
                role="listitem"
                className={`bg-card rounded-2xl p-6 border border-border ${skill.color} border-l-4`}
              >
                <h3 className="text-base font-semibold text-foreground mb-1">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
