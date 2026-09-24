import type { Metadata } from "next";
import { Toaster } from "sonner";

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import QueryProvider from "@/src/providers/query-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Navbar />
          {children}
          <Footer />
        </QueryProvider>

        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
