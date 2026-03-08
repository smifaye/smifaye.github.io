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
          <Link to="/" className="text-primary font-bold uppercase tracking-wider text-sm font-display hover:underline">
            Back to home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <a href="#case-study-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="case-study-content">
        <article className="pt-24 pb-20">
          <div className="container max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 text-sm text-primary font-bold uppercase tracking-wider font-display transition-colors mb-10 no-underline hover:underline"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to all projects
              </Link>

              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold font-display mb-3">{study.client}</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-display tracking-tighter">
                {study.title}
              </h1>
              <div className="flex gap-2 flex-wrap mb-10" aria-label="Project tags">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 border-2 border-foreground/20 text-foreground font-bold uppercase tracking-wider font-display"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t-2 border-foreground pt-10">
                <MarkdownRenderer content={study.content} />
              </div>

              <div className="border-t-2 border-foreground pt-8 mt-12">
                <Link
                  to="/#work"
                  className="inline-flex items-center gap-2 text-sm text-primary font-bold uppercase tracking-wider font-display transition-colors no-underline hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  Back to all projects
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
