"use client";

import React from "react";
import Header from "@/components/header";
import GameMediaGallery from "@/components/GameMeida";
import GameCard from "@/components/GameCard";
import { Game } from "@/type/game";
import HitsCounter from "@/components/HitsCounter";
import ReviewsSection from "@/components/ReviewsSection";
import { FiShare2 } from "react-icons/fi";

interface PlayGameLayoutProps {
  game: Game;
  similarGames: Game[];
  about: string;
  controls: string;
  tags: string[];
  children: React.ReactNode;
}

const PlayGameLayout: React.FC<PlayGameLayoutProps> = ({
  game,
  similarGames,
  about,
  controls,
  tags,
  children,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Page URL copied to clipboard!");
  };

  return (
    <div className="min-h-screen  text-white">
      <Header />
      <main className="flex-1 w-full mx-auto pt-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6 px-4 md:px-2 lg:px-4">
          <h1 className="font-oxanium font-extrabold text-2xl md:text-3xl mb-0 drop-shadow-lg">
            {game.name}
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] font-bold font-oxanium px-2 py-1 rounded-md shadow">
              {game.category ||
                (game.categories && game.categories[0]) ||
                "Uncategorized"}
            </span>
            <HitsCounter gameId={game.id} initialHits={game.hits || 0} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 px-2 md:px-2 lg:px-4">
          <div className="flex-1 bg-[#010419] rounded-2xl shadow-2xl border border-[#FF3D8E] flex flex-col items-center justify-center min-h-105 relative p-1">
            {children}
          </div>
        </div>
        <div className="bg-[#010419] pl-2 md:pl-4 py-6 pr-2 md:pr-4 shadow-xl mt-5">
          <div className="flex justify-between items-center">
            <h3 className="font-oxanium font-bold text-2xl mb-3 w-full">
              About This Game
            </h3>
            <button
              onClick={copyToClipboard}
              className="cursor-pointer text-white font-bold rounded-lg bg-[#FF3D8E] py-2 px-3 flex items-center justify-center hover:text-white transition-all duration-300"
              title="Share this page"
            >
              <FiShare2 size={20} /> Share
            </button>
          </div>
          <p className="text-gray-300 text-base mb-3 mt-3">{about}</p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-white text-[#FF3D8E] font-bold font-oxanium px-4 py-1 rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <GameMediaGallery game={game} />

        {/* Reviews Section */}
        <ReviewsSection gameId={game.id} gameName={game.name} />

        <div className="mt-5 mb-14">
          <div className="flex items-start justify-between mb-2 px-2 md:px-2 lg:px-4">
            <div className="flex py-2 gap-5">
              <div>
                <h2 className="font-oxanium font-extrabold text-2xl flex items-center gap-2 mb-0">
                  Similar Games
                </h2>
                <p className="text-[#b6c6e3] text-base">
                  You might also like these games
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-2 md:px-2 lg:px-4">
            {similarGames.length === 0 && (
              <div className="text-[#b6c6e3] col-span-full text-center">
                No similar games found.
              </div>
            )}
            {similarGames.map((g) => (
              <GameCard
                key={g.id}
                id={g.id}
                name={g.name}
                category={g.category}
                create_date={g.create_date}
                date={g.date}
                description={
                  g.description || g.translations?.en?.description || ""
                }
                thumb={
                  g.thumb8 ||
                  g.thumb7 ||
                  g.thumb6 ||
                  g.thumb5 ||
                  g.thumb4 ||
                  g.thumb3 ||
                  g.thumb2 ||
                  g.thumb1 ||
                  g.image ||
                  g.thumbnail ||
                  ""
                }
                rating={g.rating}
                playCount={g.hits || 0}
                hot={g.rating && g.rating > 50 ? true : false}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlayGameLayout;
