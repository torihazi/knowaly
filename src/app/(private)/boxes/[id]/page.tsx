import { createClient } from "@/lib/supabase/server";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Book } from "lucide-react";
import { redirect } from "next/navigation";
export default async function BoxShowPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: boxWithKnowledges } = await supabase
    .from("boxes")
    .select("*, knowledges(*)")
    .eq("id", id)
    .single();

  const hasKnowledges =
    boxWithKnowledges?.knowledges && boxWithKnowledges.knowledges.length > 0;

  return (
    <>
      <div className="flex flex-col items-center mt-6">
        {!hasKnowledges ? (
          <Card className="w-[80%] rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
            <CardContent className="flex flex-col items-center justify-center p-12 text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-4">
                <Book className="h-8 w-8 text-[#7FB3D5]" />
              </div>
              <p className="text-lg text-gray-600">
                まだ箱がありません。
                <br /> 箱を作成して、知識を整理しましょう。
              </p>
              <Link
                className="mt-6 bg-[#7FB3D5] hover:bg-[#7FB3D5]/90 text-white cursor-pointer rounded-md px-4 py-2"
                href="/boxes/new"
              >
                箱を作成する
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {boxWithKnowledges?.knowledges.map((knowledge) => (
              <Link
                key={knowledge.id}
                href={`/boxes/${id}/knowledges/${knowledge.id}`}
                className="block"
              >
                <Card className="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:opacity-90 hover:shadow focus:opacity-90 focus:shadow">
                  <CardContent className="p-6">
                    <h2 className="mb-2 text-lg font-bold">
                      {knowledge.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Last updated:
                      {new Date(knowledge.updated_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
