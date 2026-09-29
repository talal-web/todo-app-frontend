import { useMutation } from "@tanstack/react-query";
import { authService } from "@/src/services/auth.service";
import type { RegisterRequest } from "@/src/types/auth";

export function useRegister() {
  return useMutation({
    mutationFn: (data: RegisterRequest) => authService.register(data),
  });
}
