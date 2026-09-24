"use client";

import Link from "next/link";

interface NavbarProps {
  onLogin: () => void;
  onRegister: () => void;
}

export default function Navbar({ onLogin, onRegister }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 transition hover:text-blue-600"
        >
          TodoApp
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 sm:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/todos"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Todos
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onLogin}
            className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Login
          </button>

          <button
            type="button"
            onClick={onRegister}
            className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
