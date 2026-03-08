import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter } = parseFrontmatter(siteFile);
const navLabels = (frontmatter.navLinks || "").split(",").map(s => s.trim());
const navHrefs = (frontmatter.navHrefs || "").split(",").map(s => s.trim());
const links = navLabels.map((label, i) => ({ label, href: navHrefs[i] || "#" }));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="font-display font-bold text-lg text-white uppercase tracking-[-0.02em]">
          {frontmatter.navName}
        </a>
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs text-white font-medium uppercase tracking-[0.15em] hover:opacity-60 transition-opacity font-display"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {open ? (
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="square" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden fixed inset-0 top-16 bg-primary z-40"
          >
            <ul className="container py-12 flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-4xl text-primary-foreground font-display font-bold uppercase tracking-tight py-3 block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
