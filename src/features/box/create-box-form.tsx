"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { boxCreateSchema } from "@/schema/box-schema";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";

export const CreateBoxForm = () => {
  const form = useForm<z.infer<typeof boxCreateSchema>>({
    resolver: zodResolver(boxCreateSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof boxCreateSchema>> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <Input type="text" placeholder="Box Name" {...form.register("title")} />
        <Textarea
          placeholder="Box Description"
          {...form.register("description")}
        />
        <Button type="submit">作成</Button>
      </div>
    </form>
  );
};
