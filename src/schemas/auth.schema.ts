import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(72, "Password cannot exceed 72 characters")
    .regex(/[A-Z]/, "At least one uppercase letter is required")
    .regex(/[a-z]/, "At least one lowercase letter is required")
    .regex(/[0-9]/, "At least one number is required")
    .regex(/[^A-Za-z0-9\s]/, "At least one special character is required")
    .regex(/^\S+$/, "Password cannot contain spaces"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
