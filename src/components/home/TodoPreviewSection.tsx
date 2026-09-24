"use client";

import TodoPreview from "./TodoPreview";

interface TodoPreviewSectionProps {
  onAddTask: () => void;
}

export default function TodoPreviewSection({
  onAddTask,
}: TodoPreviewSectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">My Tasks</h3>

            <p className="mt-1 text-sm text-gray-500">
              Keep track of your daily tasks
            </p>
          </div>

          <button
            type="button"
            onClick={onAddTask}
            className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            + Add Task
          </button>
        </div>

        {/* Filters */}
        <div className="mb-5 flex flex-wrap gap-2 border-b border-gray-100 pb-4">
          <button className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600">
            All
          </button>

          <button className="rounded-lg px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100">
            Active
          </button>

          <button className="rounded-lg px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100">
            Completed
          </button>
        </div>

        {/* Todo examples */}
        <div className="space-y-3">
          <TodoPreview
            title="Learn Next.js"
            description="Continue working on the Todo application"
            completed={false}
          />

          <TodoPreview
            title="Build authentication"
            description="Complete login and registration"
            completed={true}
          />

          <TodoPreview
            title="Create Todo API"
            description="Build CRUD endpoints with Express and MySQL"
            completed={false}
          />
        </div>
      </div>
    </section>
  );
}
