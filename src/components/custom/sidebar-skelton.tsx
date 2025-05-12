import { SidebarMenuSkeleton, SidebarMenuItem } from "@/components/ui/sidebar";

export const SidebarSkelton = ({ length = 4 }: { length: number }) => {
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton />
        </SidebarMenuItem>
      ))}
    </>
  );
};
