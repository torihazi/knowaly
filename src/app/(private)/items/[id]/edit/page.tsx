import { redirect } from "next/navigation";

import { getItem } from "@/lib/items/actions";
import { UpdateItemForm } from "@/features/items/update-item-form";

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
    <div className="flex flex-col items-start mt-6">
      <UpdateItemForm
        itemId={item.id}
        initialTitle={item.title}
        initialContent={item.content}
      />
    </div>
  );
}
