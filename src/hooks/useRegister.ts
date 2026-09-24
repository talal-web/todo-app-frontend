"use client";

import { useMutation } from "@tanstack/react-query";

import { authClient } from "@/src/lib/auth-client";

import type { RegisterRequest } from "@/src/types/auth";
import { ApiError } from "../lib/api-error";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: RegisterRequest) => {
      const { data: result, error } = await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (error) {
        throw new ApiError(error.message || "Registration failed");
      }

      return result;
    },
  });
};
