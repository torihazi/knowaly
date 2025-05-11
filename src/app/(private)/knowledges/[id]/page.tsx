import { Book } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { getKnowledgeWithBox } from "@/lib/knowledges/actions";

export default async function KnowledgeShowPage({
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
        <Card className="w-[80%] rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
          <CardContent className="flex flex-col items-center justify-center p-12 text-center">
            <div className="mb-4 rounded-full bg-gray-100 p-4">
              <Book className="h-8 w-8 text-[#7FB3D5]" />
            </div>
            <p className="text-lg text-gray-600">
              No knowledges found.
              <br /> Create a knowledge and organize your knowledge.
            </p>
            <Link
              className="mt-6 bg-[#7FB3D5] hover:bg-[#7FB3D5]/90 text-white cursor-pointer rounded-md px-4 py-2"
              href="/boxes/new"
            >
              Create a knowledge
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
