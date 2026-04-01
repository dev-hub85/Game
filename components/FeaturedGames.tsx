"use client";

import React from "react";
import GameCard from "./GameCard";
import HTMLGames from "../lib/html_games";
import { Game } from "@/type/game";
import { normalizeGame } from "@/context/normalize_games";
import shuffleArray from "@/context/shuffle_games";

const FeaturedGames = () => {
  /* ---------------- Prepare Featured Games ---------------- */
  const featured: Game[] = shuffleArray(
    HTMLGames.slice(400, 502).map(normalizeGame),
  );

  return (
    <section className="w-full py-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-6 px-4">
          <h2 className="text-white font-oxanium font-extrabold text-2xl md:text-3xl">
            Featured Games
          </h2>
          <p className="text-[#b6c6e3] text-sm mt-1">
            Hand-picked favorites for you
          </p>
        </div>

        {/* Grid Layout */}
        <div
          className="
            grid gap-2 px-4
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            xl:grid-cols-6
          "
        >
          {featured.map((game) => (
            <div
              key={game.id}
              className="
                aspect-[5/6]
                transition-transform duration-300
                hover:scale-105
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
