import { z } from "zod";
import "./zod-custom-error";

export const itemCreateSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
});

export const itemUpdateSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
});

export type ItemCreateForm = z.infer<typeof itemCreateSchema>;
export type ItemUpdateForm = z.infer<typeof itemUpdateSchema>;
