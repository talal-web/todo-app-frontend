"use client";

import Link from "next/link";
import { useState } from "react";

import { useCurrentUser } from "@/src/hooks/useCurrentUser";
import { useLogout } from "@/src/hooks/auth/useLogout";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoading, isAuthenticated } = useCurrentUser();
  const logout = useLogout();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout.mutate(undefined, {
      onSuccess: () => {
        closeMenu();
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-gray-900 transition hover:text-blue-600"
          >
            TodoApp
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {isLoading ? (
              <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-100" />
            ) : isAuthenticated ? (
              <>
                <Link
                  href="/todos"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
                >
                  Todos
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={logout.isPending}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {logout.isPending ? "Logging out..." : "Logout"}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              {isLoading ? (
                <div className="h-10 animate-pulse rounded-lg bg-gray-100" />
              ) : isAuthenticated ? (
                <>
                  <Link
                    href="/todos"
                    onClick={closeMenu}
                    className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                  >
                    Todos
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    disabled={logout.isPending}
                    className="rounded-lg px-4 py-2.5 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {logout.isPending ? "Logging out..." : "Logout"}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={closeMenu}
                    className="rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
