"use client";

import { X } from "lucide-react";
import type { Todo } from "@/src/types/todo";

interface TodoEditModalProps {
  todo: Todo;
  title: string;
  completed: boolean;
  isPending: boolean;
  onTitleChange: (value: string) => void;
  onCompletedChange: (value: boolean) => void;
  onClose: () => void;
  onSave: () => void;
}

export default function TodoEditModal({
  todo,
  title,
  completed,
  isPending,
  onTitleChange,
  onCompletedChange,
  onClose,
  onSave,
}: TodoEditModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`edit-todo-title-${todo.id}`}
        className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl sm:p-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2
            id={`edit-todo-title-${todo.id}`}
            className="text-lg font-semibold text-gray-900"
          >
            Edit Todo
          </h2>

          <button
            type="button"
            onClick={onClose}
            disabled={isPending}
            aria-label="Close modal"
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form fields */}
        <div className="mt-5 space-y-5">
          {/* Title */}
          <div>
            <label
              htmlFor={`todo-title-${todo.id}`}
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Todo title
            </label>

            <input
              id={`todo-title-${todo.id}`}
              type="text"
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              disabled={isPending}
              autoFocus
              maxLength={200}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter todo title"
            />
          </div>

          {/* Completion */}
          <div className="rounded-xl border border-gray-200 p-3">
            <label className="flex cursor-pointer items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Completion status
                </p>

                <p className="mt-0.5 text-xs text-gray-500">
                  {completed
                    ? "This task is completed"
                    : "This task is still pending"}
                </p>
              </div>

              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => onCompletedChange(e.target.checked)}
                disabled={isPending}
                className="h-5 w-5 cursor-pointer accent-green-600 disabled:cursor-not-allowed"
              />
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            disabled={isPending}
            className="rounded-lg cursor-pointer border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onSave}
            disabled={isPending}
            className="rounded-lg cursor-pointer bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
