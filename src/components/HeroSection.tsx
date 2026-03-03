import { motion } from "framer-motion";
import heroImage from "@/assets/hero-organic.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden" aria-label="Introduction">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
          role="presentation"
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/[0.04] blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-10 left-[5%] w-96 h-96 rounded-full bg-secondary/[0.06] blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/2 right-[20%] w-3 h-3 rounded-full bg-primary/30" aria-hidden="true" />
      <div className="absolute top-[30%] right-[35%] w-2 h-2 rounded-full bg-secondary/40" aria-hidden="true" />

      <div className="container relative z-10 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs uppercase tracking-[0.2em] text-secondary mb-5 font-semibold"
            >
              Content designer · London
            </motion.p>
            <h1 className="text-5xl md:text-7xl leading-[1.05] mb-6 text-foreground font-bold tracking-tight">
              Hello, I'm{" "}
              <span className="text-primary relative">
                Adam
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary/30 origin-left rounded-full"
                  aria-hidden="true"
                />
              </span>
              <br />
              <span className="text-primary">Smith</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              I create user-centred content that puts user needs first. 
              Passionate about accessibility, plain English and content that helps people do what they need to.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                View my work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-block px-8 py-3.5 rounded-full border-2 border-foreground/15 text-foreground font-medium text-sm tracking-wide hover:border-primary/40 hover:text-primary transition-all"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>

          {/* Decorative side element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-56 h-56">
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-border/40 animate-[spin_30s_linear_infinite]" aria-hidden="true" />
              <div className="absolute -inset-1 rounded-full border border-primary/20" aria-hidden="true" />
              <img
                src={profilePhoto}
                alt="Adam Smith"
                className="w-full h-full rounded-full object-cover shadow-lg shadow-foreground/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;
