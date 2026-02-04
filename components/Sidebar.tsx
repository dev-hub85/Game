"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaGamepad,
  FaThLarge,
  FaPuzzlePiece,
  FaBrain,
  FaGem,
  FaChessBoard,
  FaCubes,
  FaCar,
  FaUserFriends,
  FaStar,
  FaDice,
  FaLayerGroup,
  FaRocket,
  FaCrown,
  FaChartBar,
  FaTrophy,
  FaBars,
  FaTimes,
  FaQuestion,
  FaCircle,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import Categories from "../lib/categories";
import { logOut } from "@/lib/auth";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import AuthModal from "./AuthModal";
import Image from "next/image";
const COLORS = {
  bg: "#12141B",
  panel: "#010419",
  border: "#2A2E3B",
  primary: "#BB0051",
  primarySoft: "#BB005122",
  text: "#E6E8EF",
  muted: "#9AA0B4",
  icon: "#E6E6E6",
};

const navLinks = [
  { name: "Home", href: "/", icon: <FaThLarge /> },
  { name: "All Games", href: "/all-games", icon: <FaPuzzlePiece /> },
  { name: "About", href: "/about", icon: <FaInfoCircle /> },
  { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
];

// Map categories to icons (customize as you wish)
const categoryIcons: Record<string, React.ReactNode> = {
  "1010 Block": <FaLayerGroup />,
  "2048 & Merge": <FaCubes />,
  "3D Mahjong": <FaChessBoard />,
  Arkanoid: <FaRocket />,
  Bejeweled: <FaGem />,
  Billiards: <FaDice />,
  Board: <FaChessBoard />,
  "Brain Games": <FaBrain />,
  "Bubble Shooter": <FaCircle />,
  "Card Games": <FaStar />,
  "Collapse Games": <FaLayerGroup />,
  "Connect 3": <FaCubes />,
  Crosswords: <FaQuestion />,
  "Daily Puzzles": <FaPuzzlePiece />,
  "Difference Games": <FaQuestion />,
  "Escape Games": <FaRocket />,
  Freecell: <FaStar />,
  Golf: <FaTrophy />,
  "Hidden Alphabet": <FaQuestion />,
  "Hidden Clues": <FaQuestion />,
  "Hidden Numbers": <FaQuestion />,
  "Hidden Object Games": <FaQuestion />,
  Klondike: <FaStar />,
  "Mahjong Connect": <FaChessBoard />,
  "Mahjong Games": <FaChessBoard />,
  "Mahjong Slide": <FaChessBoard />,
  "Mahjong Solitaire": <FaChessBoard />,
  "Mahjong Tower": <FaChessBoard />,
  "Match 3 Games": <FaCubes />,
  "Math Games": <FaChartBar />,
  "Maze Games": <FaLayerGroup />,
  Memory: <FaBrain />,
  Montana: <FaChessBoard />,
  "Pac Maze": <FaRocket />,
  Pinball: <FaDice />,
  Platform: <FaLayerGroup />,
  "Puzzle Games": <FaPuzzlePiece />,
  Puzzles: <FaPuzzlePiece />,
  Pyramid: <FaLayerGroup />,
  Racing: <FaCar />,
  Retro: <FaCrown />,
  "Shooting & War": <FaRocket />,
  Skill: <FaStar />,
  Snake: <FaRocket />,
  "Solitaire Games": <FaStar />,
  "Sorting Games": <FaLayerGroup />,
  Spider: <FaChessBoard />,
  Sudoku: <FaPuzzlePiece />,
  Tetris: <FaLayerGroup />,
  "Tile Games": <FaLayerGroup />,
  "Time management": <FaChartBar />,
  "Tower Defense": <FaCrown />,
  "Tripeaks & Golf": <FaTrophy />,
  "Word Games": <FaQuestion />,
  "Zuma Games": <FaCircle />,
  "3D": <FaCubes />,
  Action: <FaRocket />,
  Casual: <FaStar />,
  Driving: <FaCar />,
  Girls: <FaUserFriends />,
  Logic: <FaBrain />,
  MMO: <FaUserFriends />,
  Multiplayer: <FaUserFriends />,
  Sports: <FaTrophy />,
  Strategy: <FaCrown />,
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn, user, userProfile } = useUser();
  const ACTIVE_GRADIENT =
    "linear-gradient(135deg, #BB0051 0%, #E0146F 50%, #FF3D8E 100%)";
  const PRIMARY_GRADIENT =
    "linear-gradient(135deg, #BB0051 0%, #E0146F 50%, #FF3D8E 100%)";

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logOut();
      setOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-full border shadow-lg"
        style={{
          backgroundColor: COLORS.panel,
          borderColor: COLORS.border,
          color: COLORS.primary,
        }}
        onClick={() => setOpen(true)}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen z-50 w-[82vw] max-w-[320px] transition-transform duration-300 flex flex-col overflow-y-auto hide-scrollbar
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:w-[260px] md:static`}
        style={{
          backgroundColor: COLORS.panel,
          borderRight: `1px solid ${COLORS.border}`,
        }}
      >
        {/* Mobile close */}
        <div className="md:hidden flex justify-end p-4">
          <button
            className="p-2 rounded-full border"
            style={{
              borderColor: COLORS.primary,
              color: COLORS.primary,
            }}
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Branding */}
        <div className="flex items-center gap-1 px-2 md:px-2 py-4">
          <div>
            <Image
              src="/logo.png"
              alt="Neo Games Logo"
              width={80}
              height={100}
              className="object-contain"
            />
          </div>

          <div className="leading-tight font-oxanium mt-1">
            <div
              className="
      text-2xl font-extrabold tracking-widest
      bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
      bg-clip-text text-transparent
    "
            >
              NEOGAMES
            </div>

            <div
              className="flex justify-end
      text-sm tracking-[0.2em] mt-[-3px] pl-[2px]
      text-purple-400
    "
            >
              .SPACE
            </div>
          </div>
        </div>

        {/* Mobile Welcome Message - Only visible on mobile when logged in */}
        {isLoggedIn && (
          <div
            className="md:hidden mx-4 mb-4 px-4 py-3 rounded-lg"
            style={{ backgroundColor: COLORS.primarySoft }}
          >
            <div
              className="text-sm font-oxanium"
              style={{ color: COLORS.muted }}
            >
              Welcome back,
            </div>
            <div className="text-lg font-bold text-white font-oxanium">
              {userProfile?.displayName || user?.email?.split("@")[0]}
            </div>
          </div>
        )}

        {/* Nav */}
        <nav className="px-2 mb-4 space-y-1">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-5 py-2 rounded-lg font-oxanium transition-all"
                style={{
                  background: active ? ACTIVE_GRADIENT : "transparent",
                  color: active ? "#FFFFFF" : COLORS.text,
                  boxShadow: active
                    ? "0 6px 18px rgba(187, 0, 81, 0.45)"
                    : "none",
                }}
              >
                <span style={{ color: COLORS.icon }}>{link.icon}</span>
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Categories */}
        <div className="flex-1 px-2 pb-6">
          <div
            className="px-5 mb-2 text-sm font-bold font-oxanium"
            style={{ color: COLORS.muted }}
          >
            Categories
          </div>

          <div className="space-y-1">
            {Categories.map((cat) => {
              const active =
                pathname === `/category/${encodeURIComponent(cat)}`;

              return (
                <Link
                  key={cat}
                  href={`/category/${encodeURIComponent(cat)}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-5 py-2 rounded-lg text-sm font-oxanium transition-all"
                  style={{
                    backgroundColor: active ? COLORS.primary : "transparent",
                    color: active ? "#FFFFFF" : COLORS.text,
                  }}
                >
                  <span style={{ color: COLORS.icon }}>
                    {categoryIcons[cat] || <FaCircle />}
                  </span>
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Auth Buttons - At bottom, only visible on mobile */}
        <div
          className="md:hidden mt-auto px-4 py-4 border-t"
          style={{ borderColor: COLORS.border }}
        >
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-oxanium text-white transition-all border hover:bg-[#FF3D8E]"
              style={{
                backgroundColor: COLORS.panel,
                borderColor: "#FF3D8E",
              }}
            >
              <FiLogOut size={18} />
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
          ) : (
            <button
              onClick={() => setAuthModalOpen(true)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-oxanium text-white transition-all border"
              style={{
                background: PRIMARY_GRADIENT,
                borderColor: COLORS.primary,
                boxShadow: "0 6px 18px rgba(187, 0, 81, 0.45)",
              }}
            >
              <FiLogIn size={18} />
              Login
            </button>
          )}
        </div>
      </aside>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: "#00000099" }}
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
