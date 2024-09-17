"use server";

import { z } from "zod";
import { InitialState } from "../components/form/Form";

interface SuccessResponse {
  message: string;
  errors: InitialState["errors"];
}
interface ErrorResponse {
  message: null;
  errors: InitialState["errors"];
}
const schema = z.object({
  name: z
    .string()
    .min(8, "Nadie tiene un nombre con menos de 8 letras extraterrestre"),
  email: z
    .string()
    .email("Pone un email como la gente hermano")
    .min(10, "tiene que tener por lo menos 10 caracteres"),
});

export const createUser = async (
  previousState: InitialState,
  formData: FormData,
): Promise<SuccessResponse | ErrorResponse> => {
  const email = formData.get("email")?.toString() || "";
  const name = formData.get("name")?.toString() || "";

  const validatedFields = schema.safeParse({ email, name });

  if (!validatedFields.success) {
    return {
      message: null,
      errors: validatedFields.error.flatten()
        .fieldErrors as InitialState["errors"],
    };
  }

  return {
    message: "Usuario creado correctamente",
    errors: { name: [], email: [] },
  };
};
