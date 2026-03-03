import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  // Simple markdown-ish renderer for paragraphs, headings, and links
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-bold text-foreground mb-4 mt-10">
            {block.replace("## ", "")}
          </h2>
        );
      }

      // Handle images: ![alt](src)
      const imgMatch = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (imgMatch) {
        return (
          <figure key={i} className="mb-2">
            <img
              src={imgMatch[2]}
              alt={imgMatch[1]}
              className="rounded-xl border border-border w-full"
              loading="lazy"
            />
          </figure>
        );
      }

      // Handle caption (italic line after image)
      if (block.startsWith("*") && block.endsWith("*") && !block.includes("\n")) {
        return (
          <figcaption key={i} className="text-sm text-muted-foreground mb-8 italic">
            {block.slice(1, -1)}
          </figcaption>
        );
      }

      // Handle unordered lists
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((line) => line.startsWith("- "));
        return (
          <ul key={i} className="list-disc pl-6 mb-6 space-y-2">
            {items.map((item, j) => (
              <li key={j} className="text-muted-foreground leading-relaxed">
                {item.replace(/^- /, "")}
              </li>
            ))}
          </ul>
        );
      }

      // Handle italic blocks and links
      const rendered = block
        .replace(/\*([^*]+)\*/g, "<em>$1</em>")
        .replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>'
        );

      return (
        <p
          key={i}
          className="text-muted-foreground leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: rendered }}
        />
      );
    });
  };

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
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
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
                Read original post <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <div className="border-t border-border pt-10">
              {renderContent(post.content)}
            </div>

            <div className="border-t border-border pt-8 mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to blog
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
