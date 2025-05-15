import { createClient } from "@/lib/supabase/server";

export const getItem = async (id: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("id", id)
    .single();
  return data;
};
