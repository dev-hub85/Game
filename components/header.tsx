"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const isLoggedIn = false;
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <header className="relative w-full z-20 px-0 md:px-2 pt-17 md:pt-5">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 mx-2 md:mx-2">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search games…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full md:w-1/2 px-4 py-2 rounded-xl
                bg-gradient-to-r from-[#BB0051] to-[#E0146F]
                text-white placeholder:text-white/70
                focus:outline-none focus:ring-2 focus:ring-[#ff6fa8]"
            />
          </form>
        </div>

        {/* Auth Buttons - show only on md+ */}
        {!isLoggedIn && (
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 rounded-lg font-oxanium font-bold text-white
              bg-gradient-to-r from-[#BB0051] to-[#E0146F]
              hover:brightness-110 transition"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="px-4 py-2 rounded-lg font-oxanium font-bold text-white
              bg-gradient-to-r from-[#ff3d8e] to-[#BB0051]
              hover:brightness-110 transition"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
