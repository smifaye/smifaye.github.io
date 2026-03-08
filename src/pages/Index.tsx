import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import { siteFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter } = parseFrontmatter(siteFile);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <WorkSection />
        <BlogSection />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-xs text-muted-foreground tracking-[0.2em] uppercase border-t-2 border-foreground font-display" role="contentinfo">
        <div className="container">
          {frontmatter.footerText}
        </div>
      </footer>
    </div>
  );
};

export default Index;
