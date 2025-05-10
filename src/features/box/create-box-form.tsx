"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from "@/lib/supabase/client";
import { handleEnterKeyDown } from "@/lib/utils";
import { BoxCreateForm, boxCreateSchema } from "@/schema/box-schema";

export const CreateBoxForm = () => {
  const router = useRouter();
  const supabase = createClient();
  const form = useForm<BoxCreateForm>({
    resolver: zodResolver(boxCreateSchema),
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<BoxCreateForm> = async (data) => {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        throw userError;
      }
      const { data: box, error } = await supabase
        .from("boxes")
        .insert({
          title: data.title,
          description: data.description,
          user_id: user.id,
        })
        .select()
        .single();
      if (error) {
        throw error;
      }
      toast.success("Box created successfully");
      router.push(`/boxes/${box.id}`);
    } catch (error) {
      console.log(error);
      toast.error("Failed to create box");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>
                Box Name<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Box Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Box Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Box Description"
                  {...field}
                  onKeyDown={(e) =>
                    handleEnterKeyDown(e, form.handleSubmit(onSubmit))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Creating..." : "Create"}
        </Button>
      </form>
    </Form>
  );
};
