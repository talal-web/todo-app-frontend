import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Todos", href: "/todos" },
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-xl font-bold tracking-tight text-gray-900 transition hover:text-blue-600"
            >
              TodoApp
            </Link>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              A simple and modern way to organize your tasks and stay
              productive.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-500 transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TodoApp. All rights reserved.</p>

          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
