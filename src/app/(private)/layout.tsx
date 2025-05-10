import { AppSidebar } from "@/components/custom/app-sidebar";
import { MainHeader } from "@/components/custom/main-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createClient } from "@/lib/supabase/server";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Layoutでのasyncは良くないらしいので今後変更
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <SidebarProvider>
      <AppSidebar user={user ?? null} />
      <main className="flex h-screen w-full flex-col">
        <MainHeader />
        <div className="flex-1 bg-gray-50 dark:bg-gray-900 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
