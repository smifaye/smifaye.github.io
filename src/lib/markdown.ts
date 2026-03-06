// Case studies - import them here
import cmsMigration from '../../content/work/cms-migration.md?raw';
import futureProofing from '../../content/work/future-proofing-content.md?raw';
import reusableContent from '../../content/work/reusable-content.md?raw';
import uxContent from '../../content/work/ux-content.md?raw';
import dataVisualisation from '../../content/work/data-visualisation.md?raw';

// Blog posts - import them here
import accessibilityBlog from '../../content/blog/accessibility-statement-citizens-advice.md?raw';

// Page sections
import aboutRaw from '../../content/about.md?raw';
import contactRaw from '../../content/contact.md?raw';
import siteRaw from '../../content/site.md?raw';
import workRaw from '../../content/work.md?raw';
import blogRaw from '../../content/blog.md?raw';

// Control the order of pages below
export const caseStudyFiles = [
  cmsMigration,
  futureProofing,
  reusableContent,
  uxContent,
  dataVisualisation,
];

// Control the order of blogs below
export const blogPostFiles = [
  accessibilityBlog,
];

export const aboutFile = aboutRaw;
export const contactFile = contactRaw;
export const siteFile = siteRaw;
export const workFile = workRaw;
export const blogFile = blogRaw;

interface Frontmatter {
  [key: string]: string;
}

export function parseFrontmatter(raw: string): { frontmatter: Frontmatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, content: raw };

  const frontmatterBlock = match[1];
  const content = match[2].trim();
  const frontmatter: Frontmatter = {};

  for (const line of frontmatterBlock.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();
    frontmatter[key] = value;
  }

  return { frontmatter, content };
}
