"use client";

import { useState } from "react";

import LoginModal from "@/src/components/auth/LoginModal";
import RegisterModal from "@/src/components/auth/RegisterModal";

import Navbar from "@/src/components/home/Navbar";
import Hero from "@/src/components/home/Hero";
import TodoPreviewSection from "@/src/components/home/TodoPreviewSection";
import Features from "@/src/components/home/Features";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const openRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar onLogin={openLogin} onRegister={openRegister} />

      <Hero onLogin={openLogin} onRegister={openRegister} />

      <TodoPreviewSection onAddTask={openRegister} />

      <Features />

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </main>
  );
}
