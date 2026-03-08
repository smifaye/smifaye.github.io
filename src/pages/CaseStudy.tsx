import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import Navbar from "@/components/Navbar";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <main className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4 font-display">Project not found</h1>
          <Link to="/" className="text-primary font-bold uppercase tracking-wider text-xs font-mono hover:underline">
            Back to home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <a href="#case-study-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="case-study-content">
        {/* Full-width header band */}
        <div className="bg-primary pt-28 pb-16">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 text-xs text-primary-foreground/70 font-mono uppercase tracking-[0.15em] mb-8 hover:text-primary-foreground transition-colors no-underline"
              >
                <ArrowLeft className="w-3 h-3" aria-hidden="true" />
                Back to projects
              </Link>
              <p className="text-xs text-primary-foreground/60 uppercase tracking-[0.2em] font-mono mb-3">{study.client}</p>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground font-display tracking-[-0.03em] leading-[0.95]">
                {study.title}
              </h1>
              <div className="flex gap-2 flex-wrap mt-6" aria-label="Project tags">
                {study.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-1 border border-primary-foreground/30 text-primary-foreground/70 uppercase tracking-[0.1em] font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <article className="pb-20">
          <div className="container max-w-3xl pt-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <MarkdownRenderer content={study.content} />

              <div className="border-t border-border pt-8 mt-16">
                <Link
                  to="/#work"
                  className="inline-flex items-center gap-2 text-xs text-primary font-mono uppercase tracking-[0.15em] hover:underline no-underline"
                >
                  <ArrowLeft className="w-3 h-3" aria-hidden="true" />
                  Back to projects
                </Link>
              </div>
            </motion.div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default CaseStudyPage;
