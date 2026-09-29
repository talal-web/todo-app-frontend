import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { authService } from "@/src/services/auth.service";

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: authService.logout,

    onSuccess: async () => {
      await queryClient.clear();
      router.replace("/login");
      router.refresh();
    },
  });
}
