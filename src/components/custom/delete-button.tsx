"use client";

import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { deleteItem } from "@/lib/items/actions";

interface DeleteButtonProps {
  id: string;
  redirectPath: string;
}

export const DeleteButton = ({ id, redirectPath }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("you sure?")) {
      await deleteItem(id);
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
