import { useMutation } from "@tanstack/react-query";

import { authClient } from "@/src/lib/auth-client";
import type { LoginRequest } from "@/src/types/auth";
import { ApiError } from "../lib/api-error";

export function useLogin() {
  return useMutation({
    mutationFn: async (data: LoginRequest) => {
      const { data: result, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (error) {
        throw new ApiError(error.message || "Login failed");
      }

      return result;
    },
  });
}
