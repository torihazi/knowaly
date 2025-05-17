// https://github.com/Ionaru/easy-markdown-editor?tab=readme-ov-file#keyboard-shortcuts
const DEFAULT_ALL_ACTIONS = [
  "toggleBlockquote",
  "toggleBold",
  "cleanBlock",
  "toggleHeadingSmaller",
  "toggleItalic",
  "drawLink",
  "toggleUnorderedList",
  "togglePreview",
  "toggleCodeBlock",
  "drawImage",
  "toggleOrderedList",
  "toggleHeadingBigger",
  "toggleSideBySide",
  "toggleFullScreen",
  "toggleHeading1",
  "toggleHeading2",
  "toggleHeading3",
  "toggleHeading4",
  "toggleHeading5",
  "toggleHeading6",
] as const;

const ALLOWED_ACTIONS_MAP: Map<string, string> = new Map([
  ["toggleBold", "Cmd-B"],
  ["toggleItalic", "Cmd-I"],
  ["toggleHeadingSmaller", "Cmd-H"],
  ["toggleUnorderedList", "Cmd-U"],
  ["toggleFullScreen", "Cmd-J"],
  ["togglePreview", "Cmd-P"],
  ["toggleSideBySide", "Cmd-Y"],
]);

export const ALLOWED_ACTIONS = DEFAULT_ALL_ACTIONS.reduce(
  (acc, cur) => {
    return {
      ...acc,
      [cur]: ALLOWED_ACTIONS_MAP.get(cur) ?? null,
    };
  },
  {} as Record<string, string | null>
);
