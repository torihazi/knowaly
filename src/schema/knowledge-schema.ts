import { z } from "zod";
import "./zod-custom-error";

export const knowledgeCreateSchema = z.object({
  title: z.string().min(1),
  content: z.string().optional(),
});
export const knowledgeUpdateSchema = z.object({
  title: z.string().min(1),
  content: z.string().optional(),
});

export type KnowledgeCreateForm = z.infer<typeof knowledgeCreateSchema>;
export type KnowledgeUpdateForm = z.infer<typeof knowledgeUpdateSchema>;
