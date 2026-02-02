"use client";

import React, { useRef } from "react";
import GameCard from "./GameCard";
import HTMLGames from "../lib/html_games";
import { Game } from "@/type/game";
import { normalizeGame } from "@/context/normalize_games";
import shuffleArray from "@/context/shuffle_games";
import { useRouter } from "next/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import IconButton from "./IconButton";
import TextButton from "./TextButton";

const ChevronLeft = () => <FiChevronLeft size={24} />;
const ChevronRight = () => <FiChevronRight size={24} />;

const FeaturedGames = () => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  /* ---------------- Prepare Featured Games ---------------- */
  const featured: Game[] = shuffleArray(
    HTMLGames.slice(50, 72).map(normalizeGame),
  );

  /* ---------------- Scroll Function ---------------- */
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth / 2; // scroll half visible width
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-row md:flex-row items-start justify-between mb-4  px-4 py-4 mt-1">
          <div className="flex flex-col md:w-full">
            <h2 className="text-white font-oxanium font-extrabold text-2xl md:text-3xl w-full">
              Featured Games
            </h2>
            <p className="text-[#b6c6e3] text-sm mt-1 w-full">
              Hand-picked favorites for you
            </p>
          </div>
          <div className="flex gap-2 mb-2 mt-1">
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

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth py-2 mx-4"
        >
          {featured.map((game) => (
            <div
              key={game.id}
              className="
        flex-shrink-0
        w-[48%] sm:w-[45%] md:w-[32%] lg:w-[24%] xl:w-[18%]
        aspect-[5/6]
      "
            >
              <GameCard
                id={game.id}
                name={game.name}
                category={game.category}
                description={
                  game.description || game.translations?.en?.description || ""
                }
                thumb={game.thumb8 || game.thumb7 || game.thumb1 || ""}
                rating={game.rating}
                hot={!!game.rating && game.rating > 50}
                date={game.date}
                create_date={game.create_date}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
