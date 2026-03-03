import { motion } from "framer-motion";
import heroImage from "@/assets/hero-organic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Abstract organic shapes"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 font-medium">
            Content Designer · London
          </p>
          <h1 className="text-5xl md:text-7xl leading-[1.1] mb-6 text-foreground">
            Hello, I'm <em className="font-serif italic text-primary">Adam Smith</em>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            I create user-centred content that puts user needs first. 
            Passionate about accessibility, plain English and content that helps people do what they need to.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex gap-4"
          >
            <a
              href="#work"
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-full border border-border text-foreground font-medium text-sm tracking-wide hover:bg-accent transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
