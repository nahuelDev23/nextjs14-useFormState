import { InitialState } from "@/app/components/form/Form";
import { z } from "zod";
const schema = z.object({
  name: z
    .string()
    .min(8, "Nadie tiene un nombre con menos de 8 letras extraterrestre"),
  email: z
    .string()
    .email("Pone un email como la gente hermano")
    .min(10, "tiene que tener por lo menos 10 caracteres"),
});

export const validateCreateUser = (formData: FormData) => {
  const email = formData.get("email")?.toString() || "";
  const name = formData.get("name")?.toString() || "";

  const validatedFields = schema.safeParse({ email, name });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten()
        .fieldErrors as InitialState["errors"],
    };
  }

  return {
    success: true,
    errors: { name: [], email: [] },
  };
};
