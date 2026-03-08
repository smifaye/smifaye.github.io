import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data/blogPosts";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <main className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4 font-display">Post not found</h1>
          <Link to="/blog" className="text-primary font-bold uppercase tracking-wider text-xs font-mono hover:underline">
            Back to blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <a href="#blog-post-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="blog-post-content">
        {/* Full-width header band */}
        <div className="bg-foreground pt-28 pb-16">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/#blog"
                className="inline-flex items-center gap-2 text-xs text-background/70 font-mono uppercase tracking-[0.15em] mb-8 hover:text-background transition-colors no-underline"
              >
                <ArrowLeft className="w-3 h-3" aria-hidden="true" />
                Back to blog
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-background font-display tracking-[-0.03em] leading-[0.95]">
                {post.title}
              </h1>
              {post.externalUrl && (
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-background/70 font-mono uppercase tracking-[0.15em] mt-6 hover:text-background transition-colors"
                >
                  Read original post
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              )}
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
              <MarkdownRenderer content={post.content} />

              <div className="border-t border-border pt-8 mt-16">
                <Link
                  to="/#blog"
                  className="inline-flex items-center gap-2 text-xs text-primary font-mono uppercase tracking-[0.15em] hover:underline no-underline"
                >
                  <ArrowLeft className="w-3 h-3" aria-hidden="true" />
                  Back to blog
                </Link>
              </div>
            </motion.div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
