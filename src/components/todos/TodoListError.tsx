export default function TodoListError({ message }: { message?: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
      <h3 className="font-semibold text-red-800">Could not load your tasks</h3>
      <p className="mt-1 text-sm text-red-600">
        {message || "Please try again."}
      </p>
    </div>
  );
}
