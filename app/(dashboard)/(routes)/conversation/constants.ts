import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(2, {
    message: "prompt is required to be at least two leters",
  }),
});
