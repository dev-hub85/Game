"use client";

import React, { useState } from "react";
import { logOut } from "@/lib/auth";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import AuthModal from "./AuthModal";

export default function AuthButtons() {
  const { isLoggedIn, user, loading, userProfile } = useUser();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logOut();
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="hidden md:flex items-center gap-4">
        <span className="text-[#b6c6e3] text-sm">
          Welcome,{" "}
          <span className="font-semibold text-white">
            {userProfile?.displayName || user?.email?.split("@")[0]}
          </span>
        </span>
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="cursor-pointer px-4 py-2 bg-[#010419] hover:bg-[#FF3D8E] disabled:bg-[#010419] text-white rounded-lg text-sm font-medium transition flex items-center gap-2 border border-[#FF3D8E] hover:border-[#fc2a81]"
        >
          <FiLogOut size={18} />
          {isLoggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>
    );
  }

  return (
    <div className="hidden md:flex">
      <button
        onClick={() => setAuthModalOpen(true)}
        className="cursor-pointer px-4 py-2 bg-[#010419] hover:bg-[#FF3D8E] text-white rounded-lg text-sm font-medium transition flex items-center gap-2 border border-[#FF3D8E] hover:border-[#fc2a81]"
      >
        <FiLogIn size={18} />
        Login
      </button>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
}
