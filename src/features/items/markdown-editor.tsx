"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { useSidebar } from "@/components/ui/sidebar";
import { SimpleMDEReactProps } from "react-simplemde-editor";
import { ALLOWED_ACTIONS } from "../editor/options";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export const MarkdownEditor = ({
  value,
  onChange,
  onSave,
}: {
  value: string;
  onChange: (value: string) => void;
  onSave?: () => void;
}) => {
  const { setOpen } = useSidebar();

  const extraKeys = useMemo(() => {
    return {
      "Cmd-S": () => {
        onSave?.();
      },
    };
  }, []);

  const options = useMemo(() => {
    return {
      minHeight: "550px", //editorの最小高さ
      autoFocus: true, // フォーカスを自動で当てる
      spellChecker: false, // スペルチェックを無効化
      sideBySideFullscreen: false, // 全画面表示にならずに並べて編集
      unorderedListStyle: "-", // リストのスタイルを変更
      toolbarTips: true, // ツールバーのヒントを非表示
      toolbar: [
        // ツールバーに表示させるもの
        "bold",
        "italic",
        "heading",
        "|",
        "unordered-list",
        "|",
        "preview",
        "side-by-side",
        "fullscreen",
      ],
      shortcuts: ALLOWED_ACTIONS, // ショートカットキーを上書き
      onToggleFullScreen: (isFullScreen: boolean) => {
        // 全画面表示を切り替えるときにサイドバーを非表示にする
        if (isFullScreen) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      },
    } as SimpleMDEReactProps["options"];
  }, []);

  return (
    <SimpleMDE
      value={value}
      onChange={onChange}
      options={options}
      extraKeys={extraKeys}
    />
  );
};
