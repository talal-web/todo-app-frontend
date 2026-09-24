"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useCurrentUser } from "@/src/hooks/useCurrentUser";

export default function Dashboard() {
  const router = useRouter();

  const { user, isLoading, isAuthenticated } = useCurrentUser();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || !user) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome, {user.name}
        </h1>

        <p className="mt-2 text-gray-500">
          Here&apos;s an overview of your account.
        </p>
      </div>
    </main>
  );
}
