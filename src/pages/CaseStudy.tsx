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
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/" className="text-primary underline underline-offset-2 hover:bg-primary/10 rounded-sm transition-colors">
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
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to all projects
              </Link>

              <p className="text-sm text-muted-foreground mb-2">{study.client}</p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {study.title}
              </h1>
              <div className="flex gap-2 flex-wrap mb-10" aria-label="Project tags">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-border pt-10">
                <MarkdownRenderer content={study.content} />
              </div>

              <div className="border-t border-border pt-8 mt-12">
                <Link
                  to="/#work"
                  className="inline-flex items-center gap-2 text-sm text-primary underline underline-offset-2 hover:bg-primary/10 rounded-sm transition-colors"
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
