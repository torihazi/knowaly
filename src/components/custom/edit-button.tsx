"use client";

import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface EditButtonProps {
  redirectPath: string;
}

export const EditButton = ({ redirectPath }: EditButtonProps) => {
  const router = useRouter();

  const handleEdit = async () => {
    router.push(`${redirectPath}`);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleEdit}
      className="cursor-pointer"
    >
      <Pencil className="h-4 w-4 text-blue-500" />
    </Button>
  );
};
