import { z } from "zod";

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.invalid_type) {
    if (issue.expected === "string") {
      return { message: "Invalid type!" };
    }
  }
  if (issue.code === z.ZodIssueCode.too_small) {
    return { message: `Minimum length is ${issue.minimum}` };
  }
  return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);
