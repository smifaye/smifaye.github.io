import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { caseStudies, CaseStudySection } from "@/data/caseStudies";
import Navbar from "@/components/Navbar";

const SectionRenderer = ({ section }: { section: CaseStudySection }) => {
  if (section.type === "text") {
    const Heading = section.headingLevel === 3 ? "h3" : "h2";
    return (
      <div className="mb-6">
        {section.heading && (
          <Heading
            className={
              section.headingLevel === 3
                ? "text-xl font-serif text-foreground mb-3"
                : "text-2xl md:text-3xl font-serif text-foreground mb-4 mt-10"
            }
          >
            {section.heading}
          </Heading>
        )}
        {section.content?.split("\n\n").map((para, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed mb-4">
            {para}
          </p>
        ))}
      </div>
    );
  }

  if (section.type === "list") {
    return (
      <ul className="list-disc pl-6 mb-6 space-y-2">
        {section.items?.map((item, i) => (
          <li key={i} className="text-muted-foreground leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (section.type === "image") {
    return (
      <figure className="mb-8">
        <img
          src={section.src}
          alt={section.alt || ""}
          className="rounded-xl border border-border w-full"
          loading="lazy"
        />
        {section.caption && (
          <figcaption className="text-sm text-muted-foreground mt-2 italic text-center">
            {section.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return null;
};

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
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
              <ArrowLeft className="w-4 h-4" />
              Back to all projects
            </Link>

            <p className="text-sm text-muted-foreground mb-2">{study.client}</p>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
              {study.title}
            </h1>
            <div className="flex gap-2 flex-wrap mb-10">
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
              {study.sections.map((section, i) => (
                <SectionRenderer key={i} section={section} />
              ))}
            </div>

            <div className="border-t border-border pt-8 mt-12">
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all projects
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default CaseStudyPage;
