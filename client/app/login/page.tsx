"use client";

import LoginForm from "@/components/Auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-cyan-100 p-6">
      <LoginForm />
    </main>
  );
}