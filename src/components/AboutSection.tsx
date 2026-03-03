import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium">
              About
            </p>
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
              Words are my design material
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a content designer who believes that the best interfaces 
                feel like a conversation — warm, clear, and respectful of your time.
              </p>
              <p>
                With 6+ years of experience across product, brand, and UX writing, 
                I help teams shape language that guides, reassures, and delights.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "UX Writing", desc: "Microcopy & flows" },
              { label: "Content Strategy", desc: "Structure & systems" },
              { label: "Brand Voice", desc: "Tone & guidelines" },
              { label: "Information Architecture", desc: "Navigation & hierarchy" },
            ].map((skill) => (
              <div
                key={skill.label}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="text-base font-serif text-foreground mb-1">{skill.label}</h3>
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
