import Link from "next/link";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { createClient } from "@/lib/supabase/server";

export const BoxesItem = async () => {
  const supabase = await createClient();
  const { data: boxes } = await supabase.from("boxes").select("*");

  return (
    <>
      {boxes?.map((box) => (
        <SidebarMenuItem key={box.id}>
          <SidebarMenuButton asChild>
            <Link href={`/boxes/${box.id}`}>{box.title}</Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
};
