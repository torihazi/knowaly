"use client";

export const MarkdownView = ({ content }: { content: string }) => {
  return (
    <div className="prose">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
