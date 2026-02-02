import React from "react";
import GameCard from "./GameCard";
import HTMLGames from "../lib/html_games";
import Image from "next/image";
import PacoGames from "@/lib/paco_games";
import { normalizeGame } from "@/context/normalize_games";
import { Game } from "@/type/game";
import shuffleArray from "@/context/shuffle_games";

const TrendingGames = () => {
  const trending: Game[] = HTMLGames.slice(0, 12).map(normalizeGame);
  const trending_paco_games: Game[] = PacoGames.slice(40, 52).map(
    normalizeGame,
  );
  trending.push(...trending_paco_games);
  shuffleArray(trending);
  return (
    <section className=" bg-[#16263c] py-10 px-2 md:px-4 lg:px-8">
      <div className="max-w-full mx-auto">
        <div className="flex items-start mb-2 gap-4">
          <div
            className="bg-white/10 rounded-xl p-1 flex items-center justify-center border border-[#0ff0fc22]"
            style={{ minWidth: 48, minHeight: 48 }}
          >
            <Image
              src="/trend.webp"
              alt="Trending"
              width={40}
              height={40}
              style={{ width: 40, height: 40 }}
            />
          </div>
          <div>
            <h2 className="text-white font-oxanium font-extrabold text-2xl md:text-3xl flex items-center gap-2 mb-0">
              Trending Now
            </h2>
            <p className="text-[#b6c6e3] text-sm mb-6">
              Most played games this week
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mx-auto max-w-full">
          {trending.map((game, i) => (
            <GameCard
              date={game.date}
              create_date={game.create_date}
              id={game.id}
              key={game.id}
              name={game.name}
              category={game.category}
              description={
                game.description || game.translations?.en?.description || ""
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
              hot={game.rating && game.rating > 50 ? true : false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingGames;
