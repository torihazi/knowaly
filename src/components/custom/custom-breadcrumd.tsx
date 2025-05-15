import Link from "next/link";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { joinPathParts } from "@/lib/utils";

export function CustomBreadcrumb({ pathParts }: { pathParts: string[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathParts.map((part, index) => {
          return (
            <React.Fragment key={part}>
              <BreadcrumbItem>
                <Link href={joinPathParts(pathParts, index)}>{part}</Link>
              </BreadcrumbItem>
              {index !== pathParts.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
