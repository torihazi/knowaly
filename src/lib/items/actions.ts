"use server";

import { createClient } from "@/lib/supabase/server";
import { ItemCreateForm, ItemUpdateForm } from "@/schema/item-schema";

export const getItems = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getItem = async (id: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createItem = async (item: ItemCreateForm) => {
  try {
    const supabase = await createClient();
    const { data: user, error: userError } = await supabase.auth.getUser();
    if (userError) {
      throw userError;
    }
    const { data: newItem, error } = await supabase
      .from("items")
      .insert({
        user_id: user.user.id,
        title: item.title,
        content: item.content || "",
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return newItem;
  } catch (error) {
    throw error;
  }
};

export const updateItem = async (item: ItemUpdateForm, itemId: string) => {
  try {
    const supabase = await createClient();
    const { data: updatedItem, error } = await supabase
      .from("items")
      .update({
        title: item.title,
        content: item.content || "",
      })
      .eq("id", itemId)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return updatedItem;
  } catch (error) {
    throw error;
  }
};

export const deleteItem = async (itemId: string) => {
  try {
    const supabase = await createClient();
    const { error } = await supabase.from("items").delete().eq("id", itemId);

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    throw error;
  }
};
