import AddTodo from "@/src/components/todos/AddTodo";
import TodoList from "@/src/components/todos/TodoList";

export default function TodosPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            My Todos
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Keep track of your tasks and stay organized.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <AddTodo />
        </div>

        <TodoList />
      </div>
    </main>
  );
}
