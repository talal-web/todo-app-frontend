interface TodoPreviewProps {
  title: string;
  description: string;
  completed: boolean;
}

export default function TodoPreview({
  title,
  description,
  completed,
}: TodoPreviewProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-gray-200 p-4">
      <div
        className={`mt-1 h-5 w-5 rounded-full border-2 ${
          completed ? "border-green-500 bg-green-500" : "border-gray-300"
        }`}
      />

      <div className="flex-1">
        <h4
          className={`font-medium ${
            completed ? "text-gray-400 line-through" : "text-gray-900"
          }`}
        >
          {title}
        </h4>

        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
