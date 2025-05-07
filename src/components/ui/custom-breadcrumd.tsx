import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
export function CustomBreadcrumb({ pathParts }: { pathParts: string[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathParts.map((part, index) => {
          return (
            <React.Fragment key={part}>
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${part}`}>{part}</BreadcrumbLink>
              </BreadcrumbItem>
              {index !== pathParts.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
