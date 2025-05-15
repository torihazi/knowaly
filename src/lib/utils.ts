import { clsx, type ClassValue } from "clsx";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { twMerge } from "tailwind-merge";
import { unified } from "unified";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleEnterKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  callback: () => void
) => {
  if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
    e.preventDefault();
    callback();
  }
};

export const parseMarkdown = async (markdown: string) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify);

  const result = await processor.process(markdown);

  return String(result.value);
};

// 配列を受け取り、指定された要素数分の要素を"/"で結合してその文字列を返す
export const joinPathParts = (pathParts: string[], index: number) => {
  return pathParts.slice(0, index).join("/");
};
