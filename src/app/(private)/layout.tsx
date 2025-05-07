import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { createClient } from "@/lib/supabase/server";
import { MainHeader } from "@/components/ui/main-header";
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
        {children}
      </main>
    </SidebarProvider>
  );
}
