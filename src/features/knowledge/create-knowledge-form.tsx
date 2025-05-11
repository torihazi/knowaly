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
import {
  KnowledgeCreateForm,
  knowledgeCreateSchema,
} from "@/schema/knowledge-schema";

import { MarkdownEditor } from "./markdown-editor";
type CreateKnowledgeFormProps = {
  boxId: string;
};

export const CreateKnowledgeForm = ({ boxId }: CreateKnowledgeFormProps) => {
  const router = useRouter();
  const form = useForm<KnowledgeCreateForm>({
    resolver: zodResolver(knowledgeCreateSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const createKnowledge = async (data: KnowledgeCreateForm) => {
    try {
      const supabase = createClient();
      const { data: knowledge, error } = await supabase
        .from("knowledges")
        .insert({
          box_id: boxId,
          title: data.title,
          content: data.content || "",
        })
        .select()
        .single();

      if (error) {
        throw error;
      }
      toast.success("Successfully created knowledge");
      router.push(`/knowledges/${knowledge.id}`);
    } catch (error) {
      toast.error("Failed to create knowledge");
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(createKnowledge)}
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
