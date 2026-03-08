import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { blogFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter } = parseFrontmatter(blogFile);

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 md:py-32 relative overflow-hidden" aria-label="Blog posts">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">Writing</p>
          <h2 className="text-5xl md:text-7xl text-foreground tracking-[-0.03em] font-display">
            {frontmatter.heading}
          </h2>
        </motion.div>

        <div className="space-y-0">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                aria-label={post.title}
                className="group block py-10 border-t border-border last:border-b transition-all"
              >
                <div className="grid md:grid-cols-12 gap-4 items-baseline">
                  <span className="md:col-span-1 text-xs font-mono text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:translate-x-3 transition-transform font-display tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-3 text-sm max-w-xl">
                      {post.intro}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
