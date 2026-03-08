import { motion } from "framer-motion";
import { PenLine, Compass, BarChart3, Accessibility } from "lucide-react";
import { aboutFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter, content } = parseFrontmatter(aboutFile);
const paragraphs = content.split('\n\n').filter(Boolean);

const skillIcons = [PenLine, Compass, BarChart3, Accessibility];
const skills = [1, 2, 3, 4].map((n, i) => ({
  label: frontmatter[`skill${n}Label`] || "",
  desc: frontmatter[`skill${n}Desc`] || "",
  icon: skillIcons[i],
}));

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-[80vh] flex items-center overflow-hidden" aria-label="Introduction">
      {/* Bold geometric accent */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/5" aria-hidden="true" />
      <div className="absolute bottom-0 right-[38%] w-[4px] h-[40%] bg-primary" aria-hidden="true" />

      <div className="container relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-6 font-display">
            {frontmatter.role}
          </motion.p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.95] mb-12 text-foreground font-bold tracking-tighter font-display">
            Hello, I'm{" "}
            <span className="text-primary">{frontmatter.name?.split(' ')[0]}</span>
            <br />
            <span className="text-primary">{frontmatter.name?.split(' ').slice(1).join(' ')}</span>
          </h1>

          {/* About section */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>

              <h2 className="text-2xl md:text-3xl mb-6 text-foreground tracking-tight font-display">
                {frontmatter.aboutHeading}
              </h2>
              <div className="w-12 h-[3px] bg-primary mb-6" aria-hidden="true" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-0"
              role="list"
              aria-label="Skills">

              {skills.map((skill, i) =>
              <div
                key={skill.label}
                role="listitem"
                className={`p-6 border border-foreground/10 relative group cursor-default ${i < 2 ? 'border-b-0' : ''} ${i % 2 === 0 ? 'border-r-0' : ''}`}>
                  <skill.icon className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-foreground mb-1 font-display uppercase tracking-wide">{skill.label}</h3>
                  <p className="text-xs text-muted-foreground leading-snug">{skill.desc}</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex gap-4">

            <a
              href="#work"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-display font-bold text-sm uppercase tracking-wider hover:bg-primary transition-colors">
              {frontmatter.ctaPrimary}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 border-2 border-foreground text-foreground font-display font-bold text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors">
              {frontmatter.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
