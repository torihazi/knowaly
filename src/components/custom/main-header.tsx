"use client";

import { usePathname } from "next/navigation";

import { CustomBreadcrumb } from "@/components/custom/custom-breadcrumd";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function MainHeader() {
  const pathname = usePathname();
  const pathParts = pathname.split("/");

  return (
    <div className="flex items-center">
      <SidebarTrigger />
      <CustomBreadcrumb pathParts={pathParts} />
    </div>
  );
}
