import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data/blogPosts";
import { blogFile, parseFrontmatter } from "@/lib/markdown";

const { frontmatter, content } = parseFrontmatter(blogFile);

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <a href="#blog-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="blog-content">
        <section className="pt-36 pb-24" aria-label="Blog posts">
          <div className="container max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-primary transition-colors mb-8 no-underline"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span className="underline underline-offset-2 hover:bg-primary/10 transition-colors">Back to home</span>
              </Link>

               <h1 className="text-5xl md:text-8xl font-bold text-foreground mb-6">
                {frontmatter.heading}
              </h1>
               <p className="text-muted-foreground text-lg leading-relaxed mb-14 max-w-2xl md:ml-[16.666%]">
                {frontmatter.intro}
              </p>

               <ul className="space-y-3 list-none md:w-5/6 md:ml-auto">
                {blogPosts.map((post) => (
                  <li key={post.slug} className="list-none">
                    <Link
                      to={`/blog/${post.slug}`}
                       className="block bg-card rounded-xl p-6 md:p-8 border border-border hover:border-secondary hover:bg-secondary/5 transition-colors group"
                    >
                       <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {post.intro}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
