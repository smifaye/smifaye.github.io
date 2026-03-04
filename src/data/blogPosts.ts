import { blogPostFiles, parseFrontmatter } from "@/lib/markdown";

export interface BlogPost {
  slug: string;
  title: string;
  intro: string;
  externalUrl?: string;
  content: string;
}

export const blogPosts: BlogPost[] = blogPostFiles.map((raw) => {
  const { frontmatter, content } = parseFrontmatter(raw);
  return {
    slug: frontmatter.slug || "",
    title: frontmatter.title || "",
    intro: frontmatter.intro || "",
    externalUrl: frontmatter.externalUrl || undefined,
    content,
  };
});
