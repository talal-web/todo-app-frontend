import TodoList from "@/src/components/todos/TodoList";

export default function TodosPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <TodoList />
      </div>
    </main>
  );
}
