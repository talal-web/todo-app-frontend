"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { useTodos } from "@/src/hooks/useTodos";
import type { Todo } from "@/src/types/todo";

interface TodoActionsProps {
  todo: Todo;
}

export default function TodoActions({ todo }: TodoActionsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const { updateTodo, deleteTodo } = useTodos();

  function handleUpdate() {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      toast.error("Todo title is required");
      return;
    }

    updateTodo.mutate(
      {
        id: todo.id,
        data: {
          title: trimmedTitle,
        },
      },
      {
        onSuccess: () => {
          setIsEditing(false);
          toast.success("Todo updated successfully");
        },
        onError: (error) => {
          toast.error(error.message || "Failed to update todo");
        },
      },
    );
  }

  function handleToggle() {
    updateTodo.mutate(
      {
        id: todo.id,
        data: {
          completed: !todo.completed,
        },
      },
      {
        onSuccess: () => {
          toast.success(
            todo.completed ? "Todo marked as pending" : "Todo completed",
          );
        },
        onError: (error) => {
          toast.error(error.message || "Failed to update todo");
        },
      },
    );
  }

  function handleDelete() {
    deleteTodo.mutate(todo.id, {
      onSuccess: () => {
        toast.success("Todo deleted successfully");
      },
      onError: (error) => {
        toast.error(error.message || "Failed to delete todo");
      },
    });
  }

  if (isEditing) {
    return (
      <div className="flex min-w-0 items-center gap-1.5">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={updateTodo.isPending}
          autoFocus
          className="min-w-0 flex-1 rounded-md border border-gray-300 px-2.5 py-1.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 sm:w-40 sm:flex-none"
        />

        <button
          type="button"
          onClick={handleUpdate}
          disabled={updateTodo.isPending}
          className="shrink-0 rounded-md bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:px-3 sm:py-2 sm:text-sm"
        >
          {updateTodo.isPending ? "Saving..." : "Save"}
        </button>

        <button
          type="button"
          onClick={() => {
            setTitle(todo.title);
            setIsEditing(false);
          }}
          disabled={updateTodo.isPending}
          className="shrink-0 rounded-md bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-200 sm:px-3 sm:py-2 sm:text-sm"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
      {/* Complete / Pending */}
      <button
        type="button"
        onClick={handleToggle}
        disabled={updateTodo.isPending || deleteTodo.isPending}
        className={`whitespace-nowrap cursor-pointer rounded-md px-2.5 py-1.5 text-xs font-medium transition sm:rounded-lg sm:px-3 sm:py-2 sm:text-sm ${
          todo.completed
            ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
            : "bg-green-50 text-green-700 hover:bg-green-100"
        }`}
      >
        <span className="sm:hidden">{todo.completed ? "Pending" : "Done"}</span>

        <span className="hidden sm:inline">
          {todo.completed ? "Mark Pending" : "Complete"}
        </span>
      </button>

      {/* Edit */}
      <button
        type="button"
        onClick={() => setIsEditing(true)}
        disabled={updateTodo.isPending || deleteTodo.isPending}
        title="Edit todo"
        aria-label="Edit todo"
        className="shrink-0 cursor-pointer rounded-md bg-gray-100 p-1.5 text-gray-600 transition hover:bg-gray-200 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-lg sm:p-2"
      >
        <Pencil size={15} strokeWidth={2} className="sm:h-4 sm:w-4" />
      </button>

      {/* Delete */}
      <button
        type="button"
        onClick={handleDelete}
        disabled={deleteTodo.isPending || updateTodo.isPending}
        title="Delete todo"
        aria-label="Delete todo"
        className="shrink-0 cursor-pointer rounded-md bg-red-50 p-1.5 text-red-600 transition hover:bg-red-100 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-lg sm:p-2"
      >
        <Trash2 size={15} strokeWidth={2} className="sm:h-4 sm:w-4" />
      </button>
    </div>
  );
}
