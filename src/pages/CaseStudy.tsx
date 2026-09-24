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
          <Link to="/" className="text-primary underline underline-offset-2 hover:bg-primary/10 transition-colors">
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
        <article className="pt-36 pb-24">
          <div className="container max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 text-sm text-primary transition-colors mb-8 no-underline"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span className="underline underline-offset-2 hover:bg-primary/10 transition-colors">Back to all projects</span>
              </Link>

              <p className="text-xs uppercase tracking-widest font-bold text-secondary mb-4">{study.client}</p>
              <h1 className="text-5xl md:text-8xl font-bold text-foreground mb-6 max-w-4xl">
                {study.title}
              </h1>
              <ul className="flex gap-2 flex-wrap mb-10 list-none" aria-label="Project tags" role="list">
                {study.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-10 max-w-2xl md:ml-[16.666%]">
                <MarkdownRenderer content={study.content} />
              </div>

              <div className="border-t border-border pt-8 mt-12 max-w-2xl md:ml-[16.666%]">
                <Link
                  to="/#work"
                  className="inline-flex items-center gap-2 text-sm text-primary transition-colors no-underline"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  <span className="underline underline-offset-2 hover:bg-primary/10 transition-colors">Back to all projects</span>
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
