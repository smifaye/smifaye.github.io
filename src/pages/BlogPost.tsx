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
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Back to blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <a href="#blog-post-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="blog-post-content">
        <article className="pt-24 pb-20">
          <div className="container max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to blog
              </Link>

              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {post.title}
              </h1>

              {post.externalUrl && (
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-10"
                >
                  Read original post
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              )}

              <div className="border-t border-border pt-10">
                <MarkdownRenderer content={post.content} />
              </div>

              <div className="border-t border-border pt-8 mt-12">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
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
