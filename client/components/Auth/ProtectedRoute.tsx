"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthorized(true);
    } else {
      router.replace("/login");
    }

    setLoading(false);
  }, [router]);

  if (loading) {
    return null;
  }

  if (!authorized) {
    return null;
  }

  return <>{children}</>;
}