import { AppSidebar } from "@/components/custom/app-sidebar";
import { CommandPallette } from "@/components/custom/command-pallette";
import { SidebarProvider } from "@/components/ui/sidebar";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <CommandPallette />
      <AppSidebar />
      <main className="flex h-screen w-full flex-col">
        {/* <MainHeader /> */}
        <div className="flex-1 bg-gray-50 dark:bg-gray-900 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
