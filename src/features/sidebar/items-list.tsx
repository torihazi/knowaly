import Link from "next/link";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { createClient } from "@/lib/supabase/server";

export const ItemsList = async () => {
  const supabase = await createClient();
  const { data: items } = await supabase.from("items").select("*");

  return (
    <>
      {items?.map((item) => (
        <SidebarMenuItem key={item.id}>
          <SidebarMenuButton asChild>
            <Link href={`/items/${item.id}`}>{item.title}</Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
};
