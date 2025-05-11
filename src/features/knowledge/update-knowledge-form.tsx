"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import SimpleMDE from "react-simplemde-editor";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { handleEnterKeyDown } from "@/lib/utils";
import {
  KnowledgeUpdateForm,
  knowledgeUpdateSchema,
} from "@/schema/knowledge-schema";
import { MarkdownEditor } from "./markdown-editor";
import { useRouter } from "next/navigation";
type UpdateKnowledgeFormProps = {
  knowledgeId: string;
  initialTitle: string;
  initialContent: string | null;
};

export const UpdateKnowledgeForm = ({
  knowledgeId,
  initialTitle,
  initialContent,
}: UpdateKnowledgeFormProps) => {
  const router = useRouter();
  const form = useForm<KnowledgeUpdateForm>({
    resolver: zodResolver(knowledgeUpdateSchema),
    defaultValues: {
      title: initialTitle,
      content: initialContent || "",
    },
  });

  const updateKnowledge = async (data: KnowledgeUpdateForm) => {
    try {
      const supabase = createClient();
      await supabase
        .from("knowledges")
        .update({
          title: data.title,
          content: data.content || "",
        })
        .eq("id", knowledgeId);
      toast.success("Updated successfully");
      router.push(`/knowledges/${knowledgeId}`);
    } catch (error) {
      toast.error("Failed to update");
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(updateKnowledge)}
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
            Update
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
