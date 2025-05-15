import { redirect } from "next/navigation";

import { DeleteButton } from "@/components/custom/delete-button";
import { EditButton } from "@/components/custom/edit-button";
import { MarkdownView } from "@/features/items/markdown-view";
import { getItem } from "@/lib/items/actions";
import { parseMarkdown } from "@/lib/utils";

export default async function ShowItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    redirect("/items");
  }

  const content = await parseMarkdown(item.content);

  return (
    <div className="flex flex-col items-start mt-6">
      <div className="flex justify-between w-full">
        <div className="flex gap-2">{item.title}</div>
        <div className="flex gap-2">
          <EditButton redirectPath={`/knowledges/${id}/edit`} />
          <DeleteButton id={id} redirectPath={`/items/${item.id}`} />
        </div>
      </div>
      <div>
        <MarkdownView content={content} />
      </div>
    </div>
  );
}
