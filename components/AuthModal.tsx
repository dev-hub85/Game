"use client";

import React, { useState } from "react";
import { signIn, signUp, resetPassword, signInWithGoogle } from "@/lib/auth";
import { FiX, FiMail, FiLock, FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FiChevronLeft } from "react-icons/fi";

const ChevronLeft = () => <FiChevronLeft size={20} />;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthMode = "login" | "signup" | "forgot";

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setDisplayName("");
    setError("");
    setSuccess("");
  };

  const handleClose = () => {
    resetForm();
    setMode("login");
    onClose();
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (mode === "login") {
        if (!email || !password) {
          setError("Please fill in all fields");
          setLoading(false);
          return;
        }
        await signIn(email, password);
        handleClose();
      } else if (mode === "signup") {
        if (!displayName || !email || !password || !confirmPassword) {
          setError("Please fill in all fields");
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }
        if (password.length < 6) {
          setError("Password must be at least 6 characters");
          setLoading(false);
          return;
        }
        await signUp(email, password, displayName);
        handleClose();
      }
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("Email is already in use");
      } else if (err.code === "auth/weak-password") {
        setError("Password is too weak");
      } else if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password");
      } else {
        setError(err.message || "Authentication failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (!email) {
        setError("Please enter your email address");
        setLoading(false);
        return;
      }
      await resetPassword(email);
      setSuccess("Password reset email sent! Check your inbox.");
    } catch (err: any) {
      setError(err.message || "Failed to send password reset email");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithGoogle();
      handleClose();
    } catch (err: any) {
      setError(err.message || "Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto hide-scrollbar bg-gradient-to-br from-[#14243a] to-[#1a2f4a] rounded-2xl border border-[#0ff0fc33] shadow-2xl scrollbar-thin scrollbar-thumb-[#FF3D8E] scrollbar-track-[#14243a]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="cursor-pointer absolute top-4 right-4 text-[#b6c6e3] hover:text-white transition-colors"
        >
          <FiX size={24} />
        </button>

        <div className="px-4 py-8 md:px-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-2">
              {mode === "login" && "Welcome Back"}
              {mode === "signup" && "Create Account"}
              {mode === "forgot" && "Reset Password"}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] mx-auto mb-3"></div>
            <p className="text-[#b6c6e3] text-sm">
              {mode === "login" && "Sign in to continue playing"}
              {mode === "signup" && "Join thousands of players today"}
              {mode === "forgot" && "Enter your email to reset password"}
            </p>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-500/20 border border-green-500 text-green-200 px-4 py-3 rounded-lg mb-4 text-sm">
              {success}
            </div>
          )}

          {/* Forms */}
          {mode === "forgot" ? (
            <form onSubmit={handlePasswordReset} className="space-y-3">
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#393D46]" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#010419] text-white placeholder:text-[#b6c6e3]/50 border border-[#0ff0fc33] focus:border-[#FF3D8E] focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full py-3 px-6 rounded-lg font-oxanium font-bold text-white bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] hover:brightness-110 disabled:brightness-75 transition-all duration-300"
              >
                {loading ? "Sending..." : "Send Reset Email"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleAuth} className="space-y-3">
              {mode === "signup" && (
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b6c6e3]" />
                  <input
                    type="text"
                    placeholder="Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#010419] text-white placeholder:text-[#b6c6e3]/50 border border-[#0ff0fc33] focus:border-[#FF3D8E] focus:outline-none transition-colors"
                  />
                </div>
              )}
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b6c6e3]" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#010419] text-white placeholder:text-[#b6c6e3]/50 border border-[#0ff0fc33] focus:border-[#FF3D8E] focus:outline-none transition-colors"
                />
              </div>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b6c6e3]" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#010419] text-white placeholder:text-[#b6c6e3]/50 border border-[#0ff0fc33] focus:border-[#FF3D8E] focus:outline-none transition-colors"
                />
              </div>
              {mode === "signup" && (
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b6c6e3]" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#010419] text-white placeholder:text-[#b6c6e3]/50 border border-[#0ff0fc33] focus:border-[#FF3D8E] focus:outline-none transition-colors"
                  />
                </div>
              )}

              {mode === "login" && (
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => {
                      setMode("forgot");
                      setError("");
                      setSuccess("");
                    }}
                    className="cursor-pointer text-[#FF3D8E] hover:text-[#fc2a81] text-sm font-medium transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full py-3 px-6 rounded-lg font-oxanium font-bold text-white bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] hover:brightness-110 disabled:brightness-75 transition-all duration-300"
              >
                {loading
                  ? "Please wait..."
                  : mode === "login"
                    ? "Sign In"
                    : "Create Account"}
              </button>
            </form>
          )}

          {/* Divider */}
          {mode !== "forgot" && (
            <>
              <div className="flex items-center my-3">
                <div className="flex-1 border-t border-[#0ff0fc33]"></div>
                <div className="px-4 text-[#b6c6e3] text-sm font-oxanium">
                  OR
                </div>
                <div className="flex-1 border-t border-[#0ff0fc33]"></div>
              </div>

              {/* Google Button */}
              <button
                onClick={handleGoogleAuth}
                disabled={loading}
                className="cursor-pointer w-full py-3 px-6 rounded-lg font-oxanium font-bold text-white bg-[#010419] border border-[#0ff0fc33] hover:border-[#FF3D8E] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FcGoogle size={24} />
                Continue with Google
              </button>
            </>
          )}

          {/* Mode Switch */}
          <div className="mt-3 text-center">
            {mode === "forgot" ? (
              <button
                onClick={() => {
                  setMode("login");
                  setError("");
                  setSuccess("");
                }}
                className="cursor-pointer text-[#b6c6e3] hover:text-white text-sm transition-colors flex items-center justify-center w-full mx-auto"
              >
                <ChevronLeft /> Back to Login
              </button>
            ) : (
              <p className="text-[#b6c6e3] text-sm">
                {mode === "login"
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  onClick={() => {
                    setMode(mode === "login" ? "signup" : "login");
                    setError("");
                    setSuccess("");
                  }}
                  className="cursor-pointer text-[#FF3D8E] hover:text-[#fc2a81] font-semibold transition-colors"
                >
                  {mode === "login" ? "Sign Up" : "Sign In"}
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
