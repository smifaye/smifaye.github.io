import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#blog-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="blog-content">
        <section className="pt-24 pb-20" aria-label="Blog posts">
          <div className="container max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Back to home
              </Link>

              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Blog
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Here's a selection of my blogs over the years.
              </p>

              <div className="space-y-6" role="list">
                {blogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    role="listitem"
                    className="block bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-colors group"
                  >
                    <h2 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {post.intro}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
