import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router";
import { ModeToggle } from "../components/dark-mode";
import { Toaster } from "@/components/ui/sonner";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export default function Dashboard() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex justify-between h-12 shrink-0 items-center px-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {pathnames.map((p, i) => (
                  <React.Fragment key={i}>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbPage className="capitalize">
                        {p}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                    {i < pathnames.length - 1 && (
                      <BreadcrumbSeparator className="hidden md:block" />
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <ModeToggle />
        </header>
        <main className="p-4">
          <Toaster
            position="top-right"
            richColors
            theme="light"
            className="capitalize"
          />
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
