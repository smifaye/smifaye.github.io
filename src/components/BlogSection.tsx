import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { blogFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter } = parseFrontmatter(blogFile);

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-24 relative overflow-hidden" aria-label="Blog posts">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-foreground tracking-tighter font-display">
            {frontmatter.heading}
          </h2>
          <div className="w-12 h-[3px] bg-primary mt-6" aria-hidden="true" />
        </motion.div>

        <ul className="space-y-0 list-none border-t border-foreground/10">
          {blogPosts.map((post, i) => (
            <motion.li
              key={post.slug}
              className="list-none"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                aria-label={post.title}
                className="group block py-8 border-b border-foreground/10 transition-all hover:pl-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-3 font-display tracking-tight">
                      {post.title}
                      <ArrowUpRight
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-2 text-sm">
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
