"use client";

import { useQuery } from "@tanstack/react-query";
import { authService } from "@/src/services/auth.service";

export function useCurrentUser() {
  const {
    data: user,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: authService.getCurrentUser,
    retry: false,
  });

  return {
    user: user ?? null,
    isLoading: isPending,
    isAuthenticated: !!user,
    isError,
  };
}
