"use client";

import React from "react";
import Link from "next/link";
import { FaGamepad } from "react-icons/fa";

const PRIMARY_GRADIENT =
  "linear-gradient(135deg, #BB0051 0%, #E0146F 50%, #FF3D8E 100%)";

const Footer = () => {
  return (
    <footer className="w-full py-10 px-4 md:px-8 lg:px-16 border-t-2 bg-[#010419]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Branding */}
        <div className="flex flex-col gap-4 min-w-[180px]">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="p-2 rounded-lg shadow-md"
              style={{
                background: PRIMARY_GRADIENT,
                boxShadow: "0 8px 20px rgba(187, 0, 81, 0.45)",
              }}
            >
              <FaGamepad className="text-[#12141B] text-2xl" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-xl tracking-wide font-oxanium">
                GAMEZONE
              </span>
              <span className="text-xs text-[#9AA0B4] -mt-1 font-oxanium">
                Play Free HTML5 Games
              </span>
            </div>
          </div>
          <p className="text-[#b6c6e3] text-xs max-w-xs">
            Play thousands of free HTML5 games online. No downloads, no
            registration required. Just pure gaming fun!
          </p>
          {/* Social Icons */}
          <div className="flex gap-2 mt-2">
            <Link href="https://facebook.com" target="_blank">
              <span className="w-8 h-8 bg-[#112233] rounded-full flex items-center justify-center text-[#0ff0fc] cursor-pointer">
                F
              </span>
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <span className="w-8 h-8 bg-[#112233] rounded-full flex items-center justify-center text-[#0ff0fc] cursor-pointer">
                T
              </span>
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <span className="w-8 h-8 bg-[#112233] rounded-full flex items-center justify-center text-[#0ff0fc] cursor-pointer">
                Y
              </span>
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Popular Games */}
          <div>
            <h4 className="text-white font-oxanium font-bold mb-2">
              Popular Games
            </h4>
            <ul className="text-[#b6c6e3] text-sm space-y-1">
              <li>
                <Link
                  href="/all-games"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  All Games
                </Link>
              </li>
              <li>
                <Link
                  href="/category/action"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  Action Games
                </Link>
              </li>
              <li>
                <Link
                  href="/category/puzzle"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  Puzzle Games
                </Link>
              </li>
              <li>
                <Link
                  href="/category/racing"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  Racing Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-oxanium font-bold mb-2">
              Categories
            </h4>
            <ul className="text-[#b6c6e3] text-sm space-y-1">
              <li>
                <Link
                  href="/category/adventure"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  Adventure
                </Link>
              </li>
              <li>
                <Link
                  href="/category/strategy"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/category/sports"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  href="/category/kids"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  Kids Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-oxanium font-bold mb-2">Company</h4>
            <ul className="text-[#b6c6e3] text-sm space-y-1">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-oxanium font-bold mb-2">Support</h4>
            <ul className="text-[#b6c6e3] text-sm space-y-1">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#FF3D8E] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-[#9AA0B4] text-xs text-center mt-8 font-oxanium">
        © 2026 GameZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
