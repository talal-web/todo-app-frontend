import { useMutation } from "@tanstack/react-query";
import { authService } from "@/src/services/auth.service";
import type { LoginRequest } from "@/src/types/auth";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginRequest) => authService.login(data),
  });
}
