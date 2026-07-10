"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Hide navbar on Login & Register pages
  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("trip");

    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <Link
          href="/dashboard"
          className="text-3xl font-bold text-blue-600"
        >
          VoyageAI
        </Link>

        <div className="flex items-center gap-8">

          <Link href="/dashboard">Dashboard</Link>

          <Link href="/planner">Planner</Link>

          <Link href="/my-trips">My Trips</Link>

          <span className="font-semibold">
            👋 {user.name || "User"}
          </span>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}