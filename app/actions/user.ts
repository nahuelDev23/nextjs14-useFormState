"use server";

import { InitialState } from "../components/form/Form";
import { validateCreateUser } from "../validations/user/createUser";

interface SuccessResponse {
  message: string;
  errors: InitialState["errors"];
}
interface ErrorResponse {
  message: null;
  errors: InitialState["errors"];
}

export const createUser = async (
  previousState: InitialState,
  formData: FormData,
): Promise<SuccessResponse | ErrorResponse> => {
  const validation = validateCreateUser(formData);
  if (!validation.success) {
    return {
      message: null,
      errors: validation.errors,
    };
  }

  // Aca pasan cositas

  return {
    message: "Usuario creado correctamente",
    errors: { name: [], email: [] },
  };
};
