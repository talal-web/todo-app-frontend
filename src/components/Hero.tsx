import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Organize Your Tasks
          <br />
          <span className="text-blue-600">Get Things Done.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          A simple and powerful task management app to help you organize your
          work, stay focused, and get more done.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/register"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
