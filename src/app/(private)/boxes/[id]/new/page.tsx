import { Book } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { getKnowledgeWithBox } from "@/lib/knowledges/actions";
import { CreateKnowledgeForm } from "@/features/knowledge/create-knowledge-form";

export default async function CreateKnowledgePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <div className="flex flex-col items-start mt-6">
        <CreateKnowledgeForm boxId={id} />
      </div>
    </>
  );
}
