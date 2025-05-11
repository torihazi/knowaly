import { redirect } from "next/navigation";

import { UpdateKnowledgeForm } from "@/features/knowledge/update-knowledge-form";
import { getKnowledgeWithBox } from "@/lib/knowledges/actions";

export default async function EditKnowledgePage({
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
    <>
      <div className="flex flex-col items-start mt-6">
        <UpdateKnowledgeForm
          knowledgeId={knowledge.id}
          initialTitle={knowledge.title}
          initialContent={knowledge.content}
        />
      </div>
    </>
  );
}
