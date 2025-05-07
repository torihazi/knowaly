import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronUp } from "lucide-react";
import { Button } from "./button";
import { signOut } from "@/lib/auth/auth";
import { User } from "@supabase/supabase-js";
import { UserAvatar } from "@/components/ui/user-avatar";
import Link from "next/link";

export function AppSidebar({ user }: { user: User | null }) {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenuButton asChild>
          <Link href="/home">Knowaly</Link>
        </SidebarMenuButton>
      </SidebarHeader>
      {/* ContentもSuspenceで囲む。 */}
      <SidebarContent />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* Suspenceで囲む。 */}
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
