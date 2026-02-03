"use client";

import React, { useRef, useMemo } from "react";
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

const getLastTwoMonthsGames = (games: Game[], limit: number): Game[] => {
  const now = new Date();
  const twoMonthsAgo = new Date();
  twoMonthsAgo.setMonth(now.getMonth() - 1);

  return games
    .map(normalizeGame)
    .filter((game) => {
      const dateStr = game.create_date || game.date;
      if (!dateStr) return false;

      const gameDate = new Date(dateStr);
      if (isNaN(gameDate.getTime())) return false;

      return gameDate >= twoMonthsAgo && gameDate <= now;
    })
    .slice(0, limit);
};

const NewArrivals = () => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const arrivals: Game[] = useMemo(() => {
    const games = getLastTwoMonthsGames(HTMLGames, 24);
    return shuffleArray([...games]);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth / 2;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full pt-5 px-4">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-row md:flex-row items-start justify-between mb-2">
          <div className="flex flex-col md:w-full">
            <h2 className="text-white font-oxanium font-extrabold text-2xl md:text-3xl w-full">
              New Arrivals
            </h2>
            <p className="text-[#b6c6e3] text-sm mt-1 w-full">
              Recently added games for you
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

        {/* Slider */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto px-1 scroll-smooth hide-scrollbar"
          >
            {arrivals.length === 0 ? (
              <p className="text-[#b6c6e3] text-sm">
                No new games added in the last two months.
              </p>
            ) : (
              arrivals.map((game) => (
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
                      game.description ||
                      game.translations?.en?.description ||
                      ""
                    }
                    thumb={
                      game.thumb8 ||
                      game.thumb7 ||
                      game.thumb6 ||
                      game.thumb5 ||
                      game.thumb4 ||
                      game.thumb3 ||
                      game.thumb2 ||
                      game.thumb1 ||
                      game.image ||
                      game.thumbnail ||
                      ""
                    }
                    rating={game.rating}
                    playCount={game.hits || 0}
                    hot={!!game.rating && game.rating > 50}
                    date={game.date}
                    create_date={game.create_date || game.date}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
