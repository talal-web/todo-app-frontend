const features = [
  {
    title: "Create Tasks",
    description: "Create and organize your tasks with titles and descriptions.",
  },
  {
    title: "Track Progress",
    description: "Mark tasks as completed and keep track of what remains.",
  },
  {
    title: "Your Tasks",
    description:
      "Your tasks are associated with your account and remain private.",
  },
];

export default function Features() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-gray-200 p-6"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              ✓
            </div>

            <h3 className="font-semibold text-gray-900">{feature.title}</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
