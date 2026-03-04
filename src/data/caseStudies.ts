import { caseStudyFiles, parseFrontmatter } from "@/lib/markdown";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  tags: string[];
  summary: string;
  content: string;
}

export const caseStudies: CaseStudy[] = caseStudyFiles.map((raw) => {
  const { frontmatter, content } = parseFrontmatter(raw);
  return {
    slug: frontmatter.slug || "",
    title: frontmatter.title || "",
    client: frontmatter.client || "",
    tags: (frontmatter.tags || "").split(",").map((t) => t.trim()),
    summary: frontmatter.summary || "",
    content,
  };
});
