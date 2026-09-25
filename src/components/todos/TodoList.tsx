"use client";

import { useTodos } from "@/src/hooks/useTodos";
import TodoActions from "./TodoActions";

export default function TodoList() {
  const { user, todos, isLoading, isError, error } = useTodos();

  if (isLoading) {
    return (
      <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:mt-6 sm:rounded-2xl sm:p-8">
        <p className="text-sm text-gray-500">Loading todos...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-6 text-center sm:mt-6 sm:p-8">
        <p className="text-sm font-medium text-red-600">
          {error?.message || "Failed to load todos."}
        </p>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="mt-4 rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center shadow-sm sm:mt-6 sm:rounded-2xl sm:p-10">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 sm:h-12 sm:w-12">
          <span className="text-lg text-gray-400 sm:text-xl">✓</span>
        </div>

        <h3 className="mt-3 text-sm font-semibold text-gray-900 sm:mt-4">
          No todos yet
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {user?.name
            ? `${user.name}, add your first todo to get started.`
            : "Add your first todo to get started."}
        </p>
      </div>
    );
  }

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <section className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm sm:mt-6 sm:rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 sm:px-6 sm:py-5">
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-gray-900 sm:text-lg">
            {user?.name ? `${user.name}'s Todos` : "Your Todos"}
          </h2>

          <p className="mt-0.5 text-xs text-gray-500 sm:mt-1 sm:text-sm">
            {todos.length} {todos.length === 1 ? "task" : "tasks"}
          </p>
        </div>

        <div className="shrink-0 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 sm:px-3">
          <span className="sm:hidden">{completedCount} done</span>
          <span className="hidden sm:inline">{completedCount} completed</span>
        </div>
      </div>

      {/* List */}
      <ul className="divide-y divide-gray-100">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="group flex items-center justify-between gap-3 px-4 py-3 transition hover:bg-gray-50 sm:px-6"
          >
            {/* Todo information */}
            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              {/* Status dot */}
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${
                  todo.completed ? "bg-green-500" : "bg-yellow-500"
                }`}
              />

              {/* Title + Status */}
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className={`truncate text-sm font-medium ${
                    todo.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-700"
                  }`}
                >
                  {todo.title}
                </span>

                {/* Compact Info Badge */}
                <span
                  className={`hidden shrink-0 items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium sm:inline-flex ${
                    todo.completed
                      ? "bg-green-50 text-green-600"
                      : "bg-yellow-50 text-yellow-600"
                  }`}
                >
                  {todo.completed ? "Completed" : "Pending"}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="shrink-0">
              <TodoActions todo={todo} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
