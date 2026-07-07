"use client";

import RegisterForm from "@/components/Auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-cyan-100 p-6">
      <RegisterForm />
    </main>
  );
}