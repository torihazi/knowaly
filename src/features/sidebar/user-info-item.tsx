import { ChevronUp } from "lucide-react";

import { UserAvatar } from "@/components/custom/user-avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { getUser, signOut } from "@/lib/auth/auth";

export const UserInfoItem = async () => {
  const user = await getUser();

  return (
    <SidebarMenuItem>
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
  );
};
