export default function TodoListSkeleton() {
  return (
    <div className="mt-6 animate-pulse rounded-2xl border bg-white p-6">
      <div className="h-5 w-40 rounded bg-gray-200" />
      <div className="mt-5 h-2 rounded-full bg-gray-100" />
      {[1, 2, 3].map((i) => (
        <div key={i} className="mt-5 h-12 rounded-lg bg-gray-100" />
      ))}
    </div>
  );
}
