"use client";

import { Button } from "@/components/ui/button";
import { signInWithGithub } from "@/lib/auth/auth";
import { useTransition } from "react";
import Image from "next/image";

const LoginGithub = () => {
  const [isPending, startTransition] = useTransition();

  const handleGithubLogin = () => {
    startTransition(async () => {
      await signInWithGithub();
    });
  };

  return (
    <Button
      variant="outline"
      className="flex items-center justify-center gap-2 cursor-pointer"
      onClick={handleGithubLogin}
    >
      <Image src="/github-mark.svg" alt="GitHub" width={20} height={20} />
      <span>{isPending ? "リダイレクト中..." : "GitHubでログイン"}</span>
    </Button>
  );
};

export default LoginGithub;
