"use client";

import { authClient } from "@/src/lib/auth-client";

export function useCurrentUser() {
  const { data: session, isPending } = authClient.useSession();

  return {
    user: session?.user ?? null,
    isLoading: isPending,
    isAuthenticated: !!session,
  };
}
