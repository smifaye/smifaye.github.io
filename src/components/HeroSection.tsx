import { motion } from "framer-motion";
import heroImage from "@/assets/hero-organic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Abstract organic shapes in burnt orange and dark green"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent" />
      </div>
      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-primary mb-8 rounded-full"
          />
          <p className="text-sm tracking-wide text-secondary mb-6 font-semibold">
            Content designer · London
          </p>
          <h1 className="text-5xl md:text-7xl leading-[1.1] mb-6 text-foreground font-bold">
            Hello, I'm <span className="text-primary">Adam Smith</span>
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
              View my work
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
