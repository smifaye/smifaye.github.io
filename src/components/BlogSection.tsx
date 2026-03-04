import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  return (
    <section id="blog" className="py-10 md:py-14 relative overflow-hidden" aria-label="Blog posts">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl text-foreground tracking-tight">
            Blog
          </h2>
          <div className="flex gap-1 mt-5" aria-hidden="true">
            <div className="h-[3px] w-8 bg-primary rounded-full" />
            <div className="h-[3px] w-3 bg-secondary rounded-full" />
            <div className="h-[3px] w-3 bg-primary/30 rounded-full" />
          </div>
        </motion.div>

        <ul className="space-y-4 list-none">
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
                className="group block bg-background rounded-xl p-6 md:p-8 border border-border/40 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
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
