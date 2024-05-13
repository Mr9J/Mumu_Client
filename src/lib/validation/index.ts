import { z } from "zod";

export const SignupValidation = z
  .object({
    nickname: z
      .string()
      .min(2, { message: "Too Short" })
      .max(50, { message: "Too Long" }),
    username: z
      .string()
      .min(2, { message: "Too Short" })
      .max(28, { message: "Too Long" }),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Too Short" })
      .max(14, { message: "Too Long" }),
    confirmPassword: z.string(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    { message: "Passwords must match!", path: ["confirmPassword"] }
  );

export const SigninValidation = z.object({
  username: z
    .string()
    .min(2, { message: "Too Short" })
    .max(50, { message: "Too Long" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});
