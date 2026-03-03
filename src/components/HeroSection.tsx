import { motion } from "framer-motion";
import heroImage from "@/assets/hero-organic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden" aria-label="Introduction">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
          role="presentation"
        />
      </div>
      <div className="container relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-secondary mb-5 font-semibold">
            Content designer · London
          </p>
          <h1 className="text-5xl md:text-7xl leading-[1.05] mb-6 text-foreground font-bold tracking-tight">
            Hello, I'm{" "}
            <span className="text-primary">Adam</span>
            <br />
            <span className="text-primary">Smith</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            I create user-centred content that puts user needs first. 
            Passionate about accessibility, plain English and content that helps people do what they need to.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#work"
              className="inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 rounded-full border-2 border-foreground/15 text-foreground font-medium text-sm tracking-wide hover:border-foreground/30 transition-all"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;
