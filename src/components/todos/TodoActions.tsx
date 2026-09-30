"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useTodos } from "@/src/hooks/useTodos";
import type { Todo } from "@/src/types/todo";
import TodoEditModal from "./TodoEditModal";

interface TodoActionsProps {
  todo: Todo;
}

export default function TodoActions({ todo }: TodoActionsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);

  const { updateTodo, deleteTodo } = useTodos();

  function openModal() {
    setTitle(todo.title);
    setCompleted(todo.completed);
    setIsEditing(true);
  }

  function closeModal() {
    if (updateTodo.isPending) return;
    setIsEditing(false);
  }

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
          completed,
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

  return (
    <>
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        {/* Edit */}
        <button
          type="button"
          onClick={openModal}
          disabled={updateTodo.isPending || deleteTodo.isPending}
          title="Edit todo"
          aria-label="Edit todo"
          className="shrink-0 cursor-pointer rounded-md bg-gray-100 p-1.5 text-gray-600 transition hover:bg-gray-200 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-lg sm:p-2"
        >
          <Pencil size={15} strokeWidth={2} />
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
          <Trash2 size={15} strokeWidth={2} />
        </button>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <TodoEditModal
          todo={todo}
          title={title}
          completed={completed}
          isPending={updateTodo.isPending}
          onTitleChange={setTitle}
          onCompletedChange={setCompleted}
          onClose={closeModal}
          onSave={handleUpdate}
        />
      )}
    </>
  );
}
