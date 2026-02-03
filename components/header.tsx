"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthButtons from "./AuthButtons";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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
    <header className="relative w-full z-20 px-2 md:px-2 pt-17 md:pt-5">
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-4">
        {/* Search */}
        <div className="flex-1 mx-2 md:mx-2">
          <form onSubmit={handleSearch}>
            <div className="relative w-full md:w-1/2">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-lg" />
              <input
                type="text"
                placeholder="Search games…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full md:w-[500px] pl-12 pr-4 py-2 rounded-xl bg-[#FF3D8E] text-white placeholder:text-white/50 border-2 transition-all duration-200 ${
                  isFocused ? "border-white" : "border-[#fd3085]"
                } focus:outline-none`}
              />
            </div>
          </form>
        </div>

        {/* Auth Buttons */}
        <AuthButtons />
      </div>
    </header>
  );
}
