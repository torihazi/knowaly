"use client";

import { marked } from "marked";

export const MarkdownView = ({ content }: { content: string }) => {
  console.log(marked.parse(content));
  return (
    <div id="body">
      <span dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    </div>
  );
};
