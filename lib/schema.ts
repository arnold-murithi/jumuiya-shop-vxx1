import { z } from "zod";

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password is must be atleast 8 charcters"),
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword,{
    message:"Passwords must match",
    path:["confirmPassword"],
  })