import { z } from "zod";
import "./zod-custom-error";

export const boxCreateSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
});

export const boxUpdateSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
});

export type BoxCreateForm = z.infer<typeof boxCreateSchema>;
export type BoxUpdateForm = z.infer<typeof boxUpdateSchema>;
