import { Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import { SidebarSkelton } from "@/components/custom/sidebar-skelton";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { UserInfoItem } from "@/features/sidebar/user-info-item";
import { BoxesItem } from "@/features/sidebar/box-with-knowledges-item";

export function AppSidebar() {
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
          <SidebarGroupContent>
            <SidebarMenu>
              <Suspense fallback={<SidebarSkelton length={4} />}>
                <BoxesItem />
              </Suspense>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <Suspense fallback={<SidebarSkelton length={1} />}>
            <UserInfoItem />
          </Suspense>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
