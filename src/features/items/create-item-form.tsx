"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import { ItemCreateForm, itemCreateSchema } from "@/schema/item-schema";

import { MarkdownEditor } from "./markdown-editor";

export const CreateItemForm = () => {
  const router = useRouter();
  const form = useForm<ItemCreateForm>({
    resolver: zodResolver(itemCreateSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const createItem = async (data: ItemCreateForm) => {
    try {
      const supabase = createClient();
      const { data: user, error: userError } = await supabase.auth.getUser();
      if (userError) {
        throw userError;
      }
      const { data: item, error } = await supabase
        .from("items")
        .insert({
          user_id: user.user.id,
          title: data.title,
          content: data.content || "",
        })
        .select()
        .single();

      if (error) {
        throw error;
      }
      toast.success("Successfully created item");
      router.push(`/items/${item.id}`);
    } catch (error) {
      toast.error("Failed to create item");
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(createItem)}
        className="flex flex-col w-full"
      >
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="grow mb-4">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Box Name"
                    className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl outline-none bg-transparent w-fit min-w-[300px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="cursor-pointer">
            Create
          </Button>
        </div>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <MarkdownEditor
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
