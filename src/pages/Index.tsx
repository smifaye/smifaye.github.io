import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
        <WorkSection />
        <ContactSection />
      </main>
      <footer className="py-10 text-center text-xs text-muted-foreground tracking-wide border-t border-border" role="contentinfo">
        <div className="container">
          © 2026 Adam Smith
        </div>
      </footer>
    </div>
  );
};

export default Index;
