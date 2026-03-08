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
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between h-14">
        <a href="/" className="font-display font-bold text-lg text-foreground uppercase tracking-tight">
          {frontmatter.navName}
        </a>
        <ul className="hidden md:flex gap-1 items-center">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 uppercase tracking-wider"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              {open ? (
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="square" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-foreground"
          >
            <ul className="container py-2 flex flex-col">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-background font-medium uppercase tracking-wider py-3 min-h-[44px] flex items-center border-b border-background/20 last:border-0"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
