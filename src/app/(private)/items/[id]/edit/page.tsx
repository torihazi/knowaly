import { redirect } from "next/navigation";

import { UpdateItemForm } from "@/features/items/update-item-form";
import { getItem } from "@/lib/items/actions";

export default async function EditItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    redirect("/items");
  }

  return (
    <div className="flex flex-col items-start h-full">
      <UpdateItemForm
        itemId={item.id}
        initialTitle={item.title}
        initialContent={item.content}
      />
    </div>
  );
}
