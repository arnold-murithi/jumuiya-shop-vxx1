import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(1, { message: "Username is required" }).regex(/^[a-zA-Z]+$/, { message: "Username must contain only letters(no numbers or special characters)" }),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string()
    .min(1, "Password is required")
    .min(8, "Password is must be atleast 8 charcters")
    .max(32, "Password must be less than 32 characters"),
  confirmPassword: z.string()
})
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  })