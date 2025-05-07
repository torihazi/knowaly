import { z } from "zod";

export const boxCreateSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const boxUpdateSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});
