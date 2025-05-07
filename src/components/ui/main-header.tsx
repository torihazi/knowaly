"use client";

import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { CustomBreadcrumb } from "./custom-breadcrumd";

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
