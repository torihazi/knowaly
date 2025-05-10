import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";

export function CustomBreadcrumb({ pathParts }: { pathParts: string[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathParts.map((part, index) => {
          return (
            <React.Fragment key={part}>
              <BreadcrumbItem>
                <Link href={`/${part}`}>{part}</Link>
              </BreadcrumbItem>
              {index !== pathParts.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
