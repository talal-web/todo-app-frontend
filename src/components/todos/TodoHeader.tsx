type TodoHeaderProps = {
  userName?: string;
  completedCount: number;
  totalCount: number;
  onAddClick: () => void;
};

export default function TodoHeader({
  userName,
  completedCount,
  totalCount,
  onAddClick,
}: TodoHeaderProps) {
  const progress = totalCount
    ? Math.round((completedCount / totalCount) * 100)
    : 0;

  return (
    <div className="border-b border-gray-100 p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {userName ? `${userName}'s Tasks` : "My Tasks"}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Keep track of what needs to get done.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
            {progress}% complete
          </span>
          <button
            type="button"
            onClick={onAddClick}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            + Add Todo
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-500">Your progress</span>
          <span className="font-medium text-gray-700">
            {completedCount}/{totalCount} tasks
          </span>
        </div>
        <div
          className="h-2 overflow-hidden rounded-full bg-gray-100"
          role="progressbar"
          aria-label="Task completion"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
