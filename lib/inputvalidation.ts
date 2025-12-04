import { z } from 'zod';

export const FullNameSchema = z.string()
  .min(2, "Full name must be at least 2 characters long.")
  .max(50, "Full name cannot exceed 50 characters.")
  // Regex to allow letters, spaces, hyphens (-), apostrophes ('), and periods (.)
  .regex(/^[A-Za-z\s.'-]+$/, "Full name contains invalid characters.")
  .trim();


export const EmailSchema = z.string()
  .email("Please enter a valid email address.")
  .min(1, "Email is required.")
  .trim()
  .toLowerCase();


export const PasswordSchema = z.string()
  .min(8, "Password must be at least 8 characters long.")
  .max(100, "Password cannot exceed 100 characters.")
  // Lookahead assertions for strong password requirements
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter (A-Z).")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter (a-z).")
  .regex(/[0-9]/, "Password must contain at least one number (0-9).")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character (e.g., !@#$%^&*).");


export const SignUpSchema = z.object({
  fullName: FullNameSchema,
  email: EmailSchema,
  password: PasswordSchema,
  confirmPassword: PasswordSchema, 
}).refine((data) => data.password === data.confirmPassword, {
  
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});


export type SignUpFormData = z.infer<typeof SignUpSchema>;
