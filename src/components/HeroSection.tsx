import { motion } from "framer-motion";
import { PenLine, Compass, BarChart3, Accessibility } from "lucide-react";
import { aboutFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter, content } = parseFrontmatter(aboutFile);
const paragraphs = content.split('\n\n').filter(Boolean);

const skillIcons = [PenLine, Compass, BarChart3, Accessibility];
const skills = [1, 2, 3, 4].map((n, i) => ({
  label: frontmatter[`skill${n}Label`] || "",
  desc: frontmatter[`skill${n}Desc`] || "",
  accent: ["bg-primary", "bg-teal", "bg-plum", "bg-amber"][i],
  icon: skillIcons[i],
}));

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-[75vh] flex items-center overflow-hidden" aria-label="Introduction">

      <div className="container relative z-10 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs uppercase tracking-[0.2em] text-secondary mb-5 font-semibold">
            {frontmatter.role}
          </motion.p>
          <h1 className="text-5xl md:text-7xl leading-[1.05] mb-10 text-foreground font-bold tracking-tight">
            Hello, I'm{" "}
            <span className="text-primary">{frontmatter.name?.split(' ')[0]}</span>
            <br />
            <span className="text-primary">{frontmatter.name?.split(' ').slice(1).join(' ')}</span>
          </h1>

          {/* About section */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}>

              <h2 className="text-3xl md:text-4xl mb-5 text-foreground tracking-tight">
                {frontmatter.aboutHeading}
              </h2>
              <div className="flex gap-1.5 mb-6" aria-hidden="true">
                <div className="h-1 w-10 bg-primary rounded-full" />
                <div className="h-1 w-5 bg-teal rounded-full" />
                <div className="h-1 w-3 bg-plum rounded-full" />
                <div className="h-1 w-2 bg-amber rounded-full" />
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-2 gap-3"
              role="list"
              aria-label="Skills">

              {skills.map((skill) =>
              <div
                key={skill.label}
                role="listitem"
                className={`bg-card p-5 border border-border/60 relative overflow-hidden group cursor-default border-t-2 ${skill.accent.replace('bg-', 'border-t-')}`}>

                  <skill.icon className={`w-5 h-5 mb-2 ${["text-primary", "text-teal", "text-plum", "text-amber"][skills.indexOf(skill)] || "text-muted-foreground"}`} aria-hidden="true" />
                  <h3 className="text-sm font-bold text-foreground mb-1">{skill.label}</h3>
                  <p className="text-xs text-muted-foreground leading-snug">{skill.desc}</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4">

            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-all">

              {frontmatter.ctaPrimary}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 border-2 border-foreground/15 text-foreground font-medium text-sm tracking-wide hover:border-primary/40 hover:text-primary transition-all">

              {frontmatter.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;
