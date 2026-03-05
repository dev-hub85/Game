"use client";

import { useRef, useMemo } from "react";
import Categories from "../lib/categories";
import { useRouter } from "next/navigation";
import HTMLGames from "../lib/html_games";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import IconButton from "./IconButton";
import { Game } from "@/type/game";
import { cardColors } from "@/lib/colors";

function darken(hex: string, percent: number) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.max(0, ((num >> 16) & 0xff) - 255 * (percent / 100));
  const g = Math.max(0, ((num >> 8) & 0xff) - 255 * (percent / 100));
  const b = Math.max(0, (num & 0xff) - 255 * (percent / 100));
  return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
}

const ChevronLeft = () => <FiChevronLeft size={24} />;
const ChevronRight = () => <FiChevronRight size={24} />;

const categoryImages: Record<
  string,
  { name: string; image: string } | undefined
> = {};
for (const cat of Categories) {
  const game = (
    Array.isArray(HTMLGames)
      ? HTMLGames
      : (HTMLGames as { games: Game[] }).games
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

// Pre-compute stable random colors at module load time
const categoryColorMap: Record<string, (typeof cardColors)[number]> = {};
for (const cat of Categories) {
  if (categoryImages[cat]?.image) {
    categoryColorMap[cat] =
      cardColors[Math.floor(Math.random() * cardColors.length)];
  }
}

const GameCategories = () => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll left/right
  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#010419] py-5 relative px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-white font-oxanium font-extrabold text-2xl md:text-3xl tracking-wide drop-shadow-[0_0_12px_#0ff0fc55]">
              Game Categories
            </h2>
            <p className="text-[#9bb3c9] text-sm mt-1">
              Explore games by genre and discover your next favorite
            </p>
          </div>

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
            const slug = cat.toLowerCase().trim().replace(/\s+/g, "-");
            const data = categoryImages[cat];
            const randomColor = categoryColorMap[cat]; // stable per card

            return (
              <div
                key={slug}
                className="min-w-[140px] max-w-[160px] rounded-2xl flex flex-col py-2 items-center justify-between cursor-pointer transition-all scale-95 hover:scale-100 border-2"
                style={{
                  backgroundColor: `${randomColor.bg}25`,
                  borderColor: darken(randomColor.bg, 20),
                  borderStyle: "solid",
                }}
                onClick={() => router.push(`/category/${slug}`)}
              >
                <div className="w-30 h-24 rounded-lg overflow-hidden flex items-center justify-center mb-2 relative group">
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
