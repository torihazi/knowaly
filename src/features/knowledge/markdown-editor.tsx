"use client";

import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { useEffect, useMemo } from "react";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export const MarkdownEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const options = useMemo(
    () => ({
      autofocus: true, // フォーカスしたら自動で編集モードになる
      spellChecker: false, // スペルチェックを無効化
    }),
    []
  );

  return <SimpleMDE value={value} onChange={onChange} options={options} />;
};
