"use client";

import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

interface DeleteButtonProps {
  id: string;
  redirectPath: string;
  type: "boxes" | "knowledges";
}

export const DeleteButton = ({ id, redirectPath, type }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("you sure?")) {
      const supabase = createClient();
      await supabase.from(type).delete().eq("id", id);
      router.push(redirectPath);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleDelete}
      className="cursor-pointer"
    >
      <Trash className="h-4 w-4 text-red-500" />
    </Button>
  );
};
