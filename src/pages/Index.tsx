import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border bg-secondary/5" role="contentinfo">
        <div className="container">
          © 2026 Adam Smith
        </div>
      </footer>
    </div>
  );
};

export default Index;
