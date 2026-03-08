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
    <section id="about" className="relative min-h-screen flex flex-col justify-end overflow-hidden" aria-label="Introduction">
      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="text-[20vw] font-display font-bold text-foreground/[0.03] uppercase tracking-tighter leading-none">
          {frontmatter.name?.split(' ')[0]}
        </span>
      </div>

      {/* Vertical accent line */}
      <div className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" aria-hidden="true" />

      <div className="container relative z-10 pb-16 md:pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-8 font-mono">
              {frontmatter.role}
            </p>

            <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] mb-0 text-foreground font-bold tracking-[-0.04em] font-display">
              {frontmatter.name?.split(' ')[0]}
            </h1>
            <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] mb-16 text-primary font-bold tracking-[-0.04em] font-display" aria-hidden="true">
              {frontmatter.name?.split(' ').slice(1).join(' ')}
            </h1>
          </motion.div>

          {/* Two column: about + skills */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-4 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-5"
            >
              <h2 className="text-lg md:text-xl mb-4 text-foreground tracking-tight font-display">
                {frontmatter.aboutHeading}
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex gap-3 mt-8">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-display font-bold text-xs uppercase tracking-[0.15em] hover:bg-foreground transition-colors">
                  {frontmatter.ctaPrimary}
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="square" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 border border-foreground/30 text-foreground font-display font-bold text-xs uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors">
                  {frontmatter.ctaSecondary}
                </a>
              </div>
            </motion.div>

            <div className="md:col-span-1" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="md:col-span-6 grid grid-cols-2 gap-px bg-border"
              role="list"
              aria-label="Skills"
            >
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  role="listitem"
                  className="bg-background p-6 group"
                >
                  <skill.icon className="w-5 h-5 text-primary mb-4" aria-hidden="true" />
                  <h3 className="text-xs font-bold text-foreground mb-1 font-display uppercase tracking-[0.1em]">{skill.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
