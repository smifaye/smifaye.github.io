import { motion } from "framer-motion";
import { PenLine, Compass, BarChart3, Accessibility } from "lucide-react";
import { aboutFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter, content } = parseFrontmatter(aboutFile);
const paragraphs = content.split('\n\n').filter(Boolean);

const skillIcons = [PenLine, Compass, BarChart3, Accessibility];
const skillStyles = [
  { cardClass: "bg-primary text-primary-foreground", iconClass: "text-primary-foreground" },
  { cardClass: "bg-accent text-accent-foreground", iconClass: "text-accent-foreground" },
  { cardClass: "bg-secondary text-secondary-foreground", iconClass: "text-secondary-foreground" },
  { cardClass: "bg-card text-card-foreground border border-primary", iconClass: "text-primary" },
];
const skills = [1, 2, 3, 4].map((n, i) => ({
  label: frontmatter[`skill${n}Label`] || "",
  desc: frontmatter[`skill${n}Desc`] || "",
  cardClass: skillStyles[i].cardClass,
  iconClass: skillStyles[i].iconClass,
  icon: skillIcons[i],
}));

const HeroSection = () => {
  return (
    <section id="about" className="relative overflow-hidden" aria-label="Introduction">

      <div className="container relative z-10 pt-36 pb-20 md:pt-44 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs uppercase tracking-[0.18em] text-secondary mb-6 font-bold">
            {frontmatter.role}
          </motion.p>
          <h1 className="text-6xl sm:text-7xl md:text-9xl leading-[0.88] mb-16 md:mb-24 text-foreground font-bold">
            Hello, I'm
            <br />
            <span className="text-secondary">{frontmatter.name}</span>
          </h1>

          {/* About section */}
          <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-5 md:col-start-2">

              <h2 className="text-3xl md:text-5xl mb-6 text-foreground">
                {frontmatter.aboutHeading}
              </h2>
              
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
              className="grid grid-cols-2 gap-3 md:col-span-5 md:col-start-8"
              role="list"
              aria-label="Skills">

              {skills.map((skill) =>
              <div
                key={skill.label}
                role="listitem"
                className={`${skill.cardClass} rounded-xl p-5 min-h-36 relative overflow-hidden group cursor-default transition-transform hover:-translate-y-1`}>

                  <skill.icon className={`w-5 h-5 mb-2 ${skill.iconClass}`} aria-hidden="true" />
                  <h3 className="text-sm font-bold mb-1">{skill.label}</h3>
                  <p className="text-xs leading-snug opacity-80">{skill.desc}</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-3 md:ml-[8.333%]">

            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-secondary transition-colors">

              {frontmatter.ctaPrimary}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-primary text-foreground font-medium text-sm hover:bg-accent transition-colors">

              {frontmatter.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
