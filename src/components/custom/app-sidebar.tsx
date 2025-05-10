import { User } from "@supabase/supabase-js";
import { ChevronUp } from "lucide-react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import { UserAvatar } from "@/components/custom/user-avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { signOut } from "@/lib/auth/auth";
import { createClient } from "@/lib/supabase/server";

export async function AppSidebar({ user }: { user: User | null }) {
  const supabase = await createClient();
  const { data: boxesWithKnowledges } = await supabase
    .from("boxes")
    .select("*, knowledges(*)")
    .order("created_at", { ascending: false });

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuButton asChild>
            <Link href="/home">Knowaly</Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupAction asChild>
            <Link href="/boxes/new">
              <Plus /> <span className="sr-only">Add Project</span>
            </Link>
          </SidebarGroupAction>
          {/* ボックスとknowledgesを表示するようにする */}
          {/* ここまでSuspenceで囲む */}
          <SidebarGroupContent>
            <SidebarMenu>
              {boxesWithKnowledges?.map((box) => (
                <SidebarMenuItem key={box.id}>
                  <SidebarMenuButton asChild>
                    <Link href={`/boxes/${box.id}`}>{box.title}</Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    {box.knowledges?.map((knowledge) => (
                      <SidebarMenuSubItem key={knowledge.id}>
                        <Link
                          href={`/boxes/${box.id}/knowledges/${knowledge.id}`}
                          className="inline-block w-full"
                        >
                          {knowledge.title}
                        </Link>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          {/* ここまで */}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* Suspenseで囲む。 */}
            <Suspense fallback={<div>Loading...</div>}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <UserAvatar
                      imgUrl={user?.user_metadata.avatar_url ?? ""}
                      email={user?.email ?? ""}
                    />
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <Button
                      variant="ghost"
                      onClick={signOut}
                      className="justify-start px-0 py-0 h-auto"
                    >
                      ログアウト
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Suspense>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
