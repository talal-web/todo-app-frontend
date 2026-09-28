import { useMutation } from "@tanstack/react-query";

import { authClient } from "@/src/lib/auth-client";
import { ApiError } from "../lib/api-error";

export function useLogout() {
  return useMutation({
    mutationFn: async () => {
      const { error } = await authClient.signOut();

      if (error) {
        throw new ApiError(error.message || "Logout failed");
      }
    },
  });
}
