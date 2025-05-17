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
import { updateItem } from "@/lib/items/actions";
import { itemUpdateSchema } from "@/schema/item-schema";
import { ItemUpdateForm } from "@/schema/item-schema";

import { MarkdownEditor } from "./markdown-editor";

type UpdateItemFormProps = {
  itemId: string;
  initialTitle: string;
  initialContent: string | null;
};

export const UpdateItemForm = ({
  itemId,
  initialTitle,
  initialContent,
}: UpdateItemFormProps) => {
  const router = useRouter();
  const form = useForm<ItemUpdateForm>({
    resolver: zodResolver(itemUpdateSchema),
    defaultValues: {
      title: initialTitle,
      content: initialContent || "",
    },
  });

  const onSubmit = async (data: ItemUpdateForm) => {
    try {
      await updateItem(data, itemId);
      toast.success("Updated successfully");
      router.push(`/items/${itemId}`);
    } catch (error) {
      toast.error("Failed to update");
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
                    placeholder="Item Name"
                    className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl outline-none bg-transparent w-fit min-w-[300px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="cursor-pointer"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Updating..." : "Update"}
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
                  onSave={form.handleSubmit(onSubmit)}
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
