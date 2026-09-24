"use client";

interface HeroProps {
  onLogin: () => void;
  onRegister: () => void;
}

export default function Hero({ onLogin, onRegister }: HeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          Simple Task Management
        </span>

        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Organize your work.
          <br />
          <span className="text-blue-600">Get things done.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          Create tasks, track your progress, and keep your daily work organized
          in one simple place.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={onRegister}
            className="cursor-pointer rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Create Account
          </button>

          <button
            type="button"
            onClick={onLogin}
            className="cursor-pointer rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 hover:bg-gray-50"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
