import { motion } from "framer-motion";
import { PenLine, Compass, BarChart3, Accessibility } from "lucide-react";


const skills = [
{ label: "UX writing", desc: "Microcopy and interface content", accent: "bg-primary", icon: PenLine },
{ label: "Content strategy", desc: "Models and systems", accent: "bg-secondary", icon: Compass },
{ label: "Data and analytics", desc: "Insights-driven decisions", accent: "bg-secondary", icon: BarChart3 },
{ label: "Accessibility", desc: "Plain English and inclusive design", accent: "bg-primary", icon: Accessibility }];


const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-[75vh] flex items-center overflow-hidden" aria-label="Introduction">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" aria-hidden="true"
      style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      

      {/* Soft warm gradient */}
      <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-gradient-to-bl from-primary/[0.04] via-transparent to-transparent rounded-bl-full" aria-hidden="true" />

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
            
            Senior content designer
          </motion.p>
          <h1 className="text-5xl md:text-7xl leading-[1.05] mb-10 text-foreground font-bold tracking-tight">
            Hello, I'm{" "}
            <span className="text-primary">Adam</span>
            <br />
            <span className="text-primary">Smith</span>
          </h1>

          {/* About section */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}>
              
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
                I'm a senior content designer with over 7 years of experience in the public and charity sectors.
                
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-2 gap-3"
              role="list"
              aria-label="Skills">
              
              {skills.map((skill) =>
              <div
                key={skill.label}
                role="listitem"
                className="bg-card rounded-xl p-5 border border-border/60 relative overflow-hidden group cursor-default">
                
                  
                  <skill.icon className="w-5 h-5 text-muted-foreground mb-2" aria-hidden="true" />
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
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-all">
              
              View my work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 rounded-full border-2 border-foreground/15 text-foreground font-medium text-sm tracking-wide hover:border-primary/40 hover:text-primary transition-all">
              
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" aria-hidden="true" />
    </section>);

};

export default HeroSection;