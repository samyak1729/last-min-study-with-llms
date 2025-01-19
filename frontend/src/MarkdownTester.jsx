import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";

const MarkdownTester = () => {
  const markdownContent = `
    This is a formula:
    $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

    ##heading 2
    
    Inline example: \(E = mc^2\)
    
    | Column 1 | Column 2 |
    |----------|----------|
    | Data 1   | Data 2   |
  `;

  return (
    <div style={{ padding: "20px" }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownTester;

