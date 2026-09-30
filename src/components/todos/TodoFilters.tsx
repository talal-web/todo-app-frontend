import { FILTERS, type Filter } from "./todo.utils";

type TodoFiltersProps = {
  value: Filter;
  onChange: (filter: Filter) => void;
};

export default function TodoFilters({ value, onChange }: TodoFiltersProps) {
  return (
    <div className="flex gap-2 overflow-x-auto border-b border-gray-100 px-5 py-3 sm:px-6">
      {FILTERS.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          aria-pressed={value === item}
          className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium capitalize transition ${
            value === item
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-gray-50 text-gray-600 hover:bg-gray-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
