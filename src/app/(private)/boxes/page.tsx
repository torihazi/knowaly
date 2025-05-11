import { Book } from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export default async function IndexBoxPage() {
  const supabase = await createClient();
  const { data: boxes } = await supabase.from("boxes").select("*");
  const hasBoxes = boxes?.length && boxes.length > 0;

  return (
    <>
      <div className="flex flex-col items-start mt-6">
        {!hasBoxes ? (
          <Card className="w-[80%] rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
            <CardContent className="flex flex-col items-center justify-center p-12 text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-4">
                <Book className="h-8 w-8 text-[#7FB3D5]" />
              </div>
              <p className="text-lg text-gray-600">
                No boxes found.
                <br /> Create a box and organize your knowledge.
              </p>
              <Link
                className="mt-6 bg-[#7FB3D5] hover:bg-[#7FB3D5]/90 text-white cursor-pointer rounded-md px-4 py-2"
                href="/boxes/new"
              >
                Create a box
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {boxes.map((box) => (
              <Link key={box.id} href={`/boxes/${box.id}`} className="block">
                <Card className="h-full rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:opacity-90 hover:shadow focus:opacity-90 focus:shadow">
                  <CardContent className="p-6">
                    <h2 className="mb-2 text-lg font-bold">{box.title}</h2>
                    <p className="text-sm text-gray-500">
                      Last updated:{" "}
                      {new Date(box.updated_at).toLocaleDateString()}
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
