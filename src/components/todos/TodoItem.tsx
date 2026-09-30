import type { Todo } from "@/src/types/todo";
import TodoActions from "./TodoActions";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li className="flex items-center justify-between gap-3 px-5 py-4 transition hover:bg-gray-50 sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <span
          aria-hidden="true"
          className={`h-2.5 w-2.5 shrink-0 rounded-full ${
            todo.completed ? "bg-green-500" : "bg-amber-400"
          }`}
        />
        <div className="min-w-0">
          <p
            className={`wrap-break-word text-sm font-medium ${
              todo.completed ? "text-gray-400 line-through" : "text-gray-800"
            }`}
          >
            {todo.title}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            {todo.completed ? "Completed" : "In progress"}
          </p>
        </div>
      </div>

      <div className="shrink-0">
        <TodoActions todo={todo} />
      </div>
    </li>
  );
}
