import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { blogFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter } = parseFrontmatter(blogFile);

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 md:py-28 relative overflow-hidden" aria-label="Blog posts">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:grid md:grid-cols-12"
        >
          <h2 className="text-4xl md:text-6xl text-foreground md:col-span-6 md:col-start-6">
            {frontmatter.heading}
          </h2>
        </motion.div>

        <ul className="space-y-3 list-none md:w-2/3 md:ml-auto">
          {blogPosts.map((post, i) => (
            <motion.li
              key={post.slug}
              className="list-none"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                aria-label={post.title}
                className="group block bg-card rounded-xl p-6 md:p-8 border border-border hover:border-secondary hover:bg-secondary/5 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-secondary transition-colors flex items-center gap-2">
                      {post.title}
                      <ArrowUpRight
                        className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex-shrink-0"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-1 text-sm">
                      {post.intro}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
