import type { Filter } from "./todo.utils";

type TodoEmptyStateProps = {
  filter: Filter;
  hasTodos: boolean;
  onAddClick: () => void;
};

export default function TodoEmptyState({
  filter,
  hasTodos,
  onAddClick,
}: TodoEmptyStateProps) {
  const title = !hasTodos
    ? "No tasks yet"
    : filter === "active"
      ? "All caught up!"
      : "No completed tasks";

  const description = !hasTodos
    ? "Add your first task to get started."
    : filter === "active"
      ? "You've finished all your tasks."
      : "Complete a task and it will appear here.";

  return (
    <div className="px-5 py-12 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-400">
        {filter === "completed" ? "✓" : "☰"}
      </div>
      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>

      {!hasTodos && (
        <button
          type="button"
          onClick={onAddClick}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          + Add your first task
        </button>
      )}
    </div>
  );
}
