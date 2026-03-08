import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="container py-2" aria-hidden="true">
      <div className="flex items-center gap-3">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-1.5 h-1.5 rounded-full bg-teal" />
          <div className="w-1 h-1 rounded-full bg-plum" />
        </motion.div>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
};

export default SectionDivider;
