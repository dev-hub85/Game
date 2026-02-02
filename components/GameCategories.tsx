"use client";

import { useRef } from "react";
import Categories from "../lib/categories";
import { useRouter } from "next/navigation";
import HTMLGames from "../lib/html_games";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import IconButton from "./IconButton";
import { Game } from "@/type/game";

interface GameCollection {
  games: Game[];
}

const ChevronLeft = () => <FiChevronLeft size={24} />;
const ChevronRight = () => <FiChevronRight size={24} />;

// Map each category to a representative game (first found)
const categoryImages: Record<
  string,
  { name: string; image: string } | undefined
> = {};
for (const cat of Categories) {
  const game = (
    Array.isArray(HTMLGames) ? HTMLGames : (HTMLGames as GameCollection).games
  )?.find((g: Game) => (g.category ?? "").toLowerCase() === cat.toLowerCase());
  if (game) {
    categoryImages[cat] = {
      name: game.name,
      image:
        game.thumb8 ||
        game.thumb7 ||
        game.thumb6 ||
        game.thumb5 ||
        game.thumb4 ||
        game.thumb3 ||
        game.thumb2 ||
        game.thumb1 ||
        "",
    };
  }
}

const GameCategories = () => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll left/right handlers
  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320; // px per scroll
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#010419] py-5 relative px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header Row */}
        <div className="flex items-start justify-between mb-6">
          {/* Title + Subtitle */}
          <div>
            <h2 className="text-white font-oxanium font-extrabold text-2xl md:text-3xl tracking-wide drop-shadow-[0_0_12px_#0ff0fc55]">
              Game Categories
            </h2>
            <p className="text-[#9bb3c9] text-sm mt-1">
              Explore games by genre and discover your next favorite
            </p>
          </div>

          {/* Scroll Buttons */}
          <div className="flex gap-2 mt-1">
            <IconButton onClick={() => scroll("left")}>
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={() => scroll("right")}
              className="bg-gradient-to-r from-[#E0146F] to-[#BB0051]"
            >
              <ChevronRight />
            </IconButton>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar scroll-smooth gap-2"
        >
          {Categories.filter((cat) => categoryImages[cat]?.image).map((cat) => {
            const data = categoryImages[cat];
            return (
              <div
                key={cat}
                className="min-w-[140px] max-w-[160px] rounded-2xl flex flex-col items-center justify-between cursor-pointer transition-all hover:scale-105"
                onClick={() => router.push(`/category/${cat}`)}
              >
                <div className="w-30 h-24 rounded-lg overflow-hidden bg-[#222] flex items-center justify-center mb-2 relative group">
                  <Image
                    src={data!.image}
                    alt={cat}
                    fill
                    className="object-fill w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Shine overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
                  </div>
                </div>

                <div className="text-white font-bold text-center text-sm truncate w-full">
                  {cat}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
