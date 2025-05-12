import { createClient } from "@/lib/supabase/server";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export const BoxWithKnowledgesItem = async () => {
  const supabase = await createClient();
  const { data: boxesWithKnowledges } = await supabase
    .from("boxes")
    .select("*, knowledges(*)")
    .order("created_at", { ascending: false });
  return (
    <>
      {boxesWithKnowledges?.map((box) => (
        <SidebarMenuItem key={box.id}>
          <SidebarMenuButton asChild>
            <Link href={`/boxes/${box.id}`}>{box.title}</Link>
          </SidebarMenuButton>
          <SidebarMenuSub>
            {box.knowledges?.map((knowledge) => (
              <SidebarMenuSubItem
                key={knowledge.id}
                className="hover:bg-gray-100 dark:hover:bg-gray-800 p-1"
              >
                <Link
                  href={`/knowledges/${knowledge.id}`}
                  className="inline-block w-full"
                >
                  {knowledge.title}
                </Link>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </SidebarMenuItem>
      ))}
    </>
  );
};
