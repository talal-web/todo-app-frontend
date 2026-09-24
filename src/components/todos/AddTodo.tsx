"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useTodos } from "@/src/hooks/useTodos";
import type { CreateTodoRequest } from "@/src/types/todo";

export default function AddTodo() {
  const { createTodo } = useTodos();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTodoRequest>();

  function onSubmit(data: CreateTodoRequest) {
    createTodo.mutate(data, {
      onSuccess: () => {
        reset();
        toast.success("Todo added successfully");
      },

      onError: (error) => {
        toast.error(error.message || "Failed to add todo");
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <div className="flex-1">
        <input
          type="text"
          placeholder="What do you need to do?"
          {...register("title", {
            required: "Todo title is required",
          })}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />

        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={createTodo.isPending}
        className="rounded-lg bg-blue-600 px-6 py-3 cursor-pointer text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {createTodo.isPending ? "Adding..." : "Add Todo"}
      </button>
    </form>
  );
}
