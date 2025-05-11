import { redirect } from "next/navigation";

import { DeleteButton } from "@/components/custom/delete-button";
import { EditButton } from "@/components/custom/edit-button";
import { MarkdownView } from "@/features/knowledge/markdown-view";
import { getKnowledgeWithBox } from "@/lib/knowledges/actions";

export default async function ShowKnowledgePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const knowledge = await getKnowledgeWithBox(id);

  if (!knowledge) {
    redirect("/boxes");
  }

  return (
    <div className="flex flex-col items-start mt-6">
      <div className="flex justify-between w-full">
        <div className="flex gap-2">{knowledge.title}</div>
        <div className="flex gap-2">
          <EditButton redirectPath={`/knowledges/${id}/edit`} />
          <DeleteButton
            id={id}
            redirectPath={`/boxes/${knowledge.box_id}`}
            type="knowledges"
          />
        </div>
      </div>
      <div>
        <MarkdownView content={knowledge.content} />
      </div>
    </div>
  );
}
