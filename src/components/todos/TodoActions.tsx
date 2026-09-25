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
          className="shrink-0 cursor-pointer rounded-md bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 sm:px-3 sm:py-2 sm:text-sm"
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
          className="shrink-0 cursor-pointer rounded-md bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-200 sm:px-3 sm:py-2 sm:text-sm"
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
        aria-label={todo.completed ? "Mark as pending" : "Mark as completed"}
        title={todo.completed ? "Mark as pending" : "Mark as completed"}
        className={`flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md border transition ${
          todo.completed
            ? "border-green-500 bg-green-500 text-white hover:bg-green-600"
            : "border-gray-300 bg-white text-transparent hover:border-green-500 hover:bg-green-50"
        } disabled:cursor-not-allowed disabled:opacity-50`}
      >
        {todo.completed && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-7.5 9a.75.75 0 0 1-1.127.075l-4-4a.75.75 0 0 1 1.06-1.06l3.41 3.41 6.97-8.363a.75.75 0 0 1 1.044-.114Z"
              clipRule="evenodd"
            />
          </svg>
        )}
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
