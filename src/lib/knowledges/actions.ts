import { createClient } from "@/lib/supabase/server";

export const getKnowledges = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("knowledges").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getKnowledgesWithBoxes = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("knowledges")
    .select("*, boxes!inner(id, title)");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getKnowledgeWithBox = async (id: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("knowledges")
    .select("*, boxes!inner(id, title)")
    .eq("id", id)
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
