"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { useRegister } from "@/src/hooks/useRegister";
import {
  registerSchema,
  type RegisterFormValues,
} from "@/src/schemas/auth.schema";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate: registerUser, isPending, error } = useRegister();

  const onSubmit = (data: RegisterFormValues) => {
    registerUser(data, {
      onSuccess: () => router.push("/login"),
    });
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
      <h1 className="mb-1 text-2xl font-bold text-gray-900">Create Account</h1>
      <p className="mb-6 text-sm text-gray-500">
        Create your account to get started.
      </p>

      {error && (
        <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error.message}
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            autoComplete="name"
            {...register("name")}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-blue-500"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            {...register("email")}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-blue-500"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            {...register("password")}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-blue-500"
          />
          <p className="mt-1 text-xs text-gray-500">
            8+ characters, uppercase, lowercase, number and special character.
          </p>
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-blue-600 py-2.5 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Creating Account..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}
