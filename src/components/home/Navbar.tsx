"use client";

interface NavbarProps {
  onLogin: () => void;
  onRegister: () => void;
}

export default function Navbar({ onLogin, onRegister }: NavbarProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-gray-900">TodoApp</h1>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onLogin}
            className="cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Login
          </button>

          <button
            type="button"
            onClick={onRegister}
            className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
