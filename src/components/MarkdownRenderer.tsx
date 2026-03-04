import React from "react";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const blocks = content.split("\n\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i].trim();
    if (!block) { i++; continue; }

    // Headings
    if (block.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-foreground mb-3 mt-8">
          {block.replace("### ", "")}
        </h3>
      );
      i++; continue;
    }

    if (block.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-10">
          {block.replace("## ", "")}
        </h2>
      );
      i++; continue;
    }

    // Image with optional caption on next line
    const imgMatch = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      const nextBlock = blocks[i + 1]?.trim();
      const captionMatch = nextBlock?.match(/^\*([^*]+)\*$/);
      elements.push(
        <figure key={i} className="mb-8">
          <img
            src={imgMatch[2]}
            alt={imgMatch[1]}
            className="rounded-xl border border-border w-full"
            loading="lazy"
          />
          {captionMatch && (
            <figcaption className="text-sm text-muted-foreground mt-2 italic text-center">
              {captionMatch[1]}
            </figcaption>
          )}
        </figure>
      );
      if (captionMatch) i++; // skip caption block
      i++; continue;
    }

    // Standalone caption (italic)
    if (block.startsWith("*") && block.endsWith("*") && !block.includes("\n")) {
      elements.push(
        <p key={i} className="text-sm text-muted-foreground mb-6 italic">
          {block.slice(1, -1)}
        </p>
      );
      i++; continue;
    }

    // Unordered list
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((line) => line.startsWith("- "));
      elements.push(
        <ul key={i} className="list-disc pl-6 mb-6 space-y-2">
          {items.map((item, j) => (
            <li key={j} className="text-muted-foreground leading-relaxed">
              {item.replace(/^- /, "")}
            </li>
          ))}
        </ul>
      );
      i++; continue;
    }

    // Paragraph - handle inline markdown (links, bold, italic)
    const rendered = block
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-2 hover:text-primary/80">$1<span class="sr-only"> (opens in new tab)</span></a>'
      );

    elements.push(
      <p
        key={i}
        className="text-muted-foreground leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: rendered }}
      />
    );
    i++;
  }

  return <>{elements}</>;
};

export default MarkdownRenderer;
