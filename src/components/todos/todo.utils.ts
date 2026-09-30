import type { Todo } from "@/src/types/todo";

export type Filter = "all" | "active" | "completed";

export const FILTERS: Filter[] = ["all", "active", "completed"];

export function filterTodos(todos: Todo[], filter: Filter) {
  if (filter === "active") return todos.filter((t) => !t.completed);
  if (filter === "completed") return todos.filter((t) => t.completed);
  return todos;
}
