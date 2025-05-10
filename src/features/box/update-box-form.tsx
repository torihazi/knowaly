"use client";

import { createClient } from "@/lib/supabase/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { BoxUpdateForm, boxUpdateSchema } from "@/schema/box-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleEnterKeyDown } from "@/lib/utils";

type UpdateBoxFormProps = {
  boxId: string;
  initialTitle: string;
  initialDescription: string | null;
};

export const UpdateBoxForm = ({
  boxId,
  initialTitle,
  initialDescription,
}: UpdateBoxFormProps) => {
  const form = useForm<BoxUpdateForm>({
    resolver: zodResolver(boxUpdateSchema),
    defaultValues: {
      title: initialTitle,
      description: initialDescription || "",
    },
  });

  const updateBox = async (data: BoxUpdateForm) => {
    try {
      const supabase = createClient();
      await supabase
        .from("boxes")
        .update({
          title: data.title,
          description: data.description || null,
        })
        .eq("id", boxId);
      toast.success("更新が完了しました");
    } catch (error) {
      toast.error("更新に失敗しました");
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(updateBox)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Box Name"
                  className="border-none shadow-none text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl outline-none bg-transparent w-fit min-w-[300px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  className="border-none shadow-none text-lg text-gray-600 dark:text-gray-400 outline-none bg-transparent w-fit min-w-[300px] resize-none"
                  placeholder="No descriptions yet!!"
                  onKeyDown={(e) =>
                    handleEnterKeyDown(e, form.handleSubmit(updateBox))
                  }
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
