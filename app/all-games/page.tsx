"use client";

import HTMLGames from "../../lib/html_games";
import Categories from "../../lib/categories";
import GameCard from "../../components/GameCard";
import { useState } from "react";
import { Game } from "@/type/game";
import PacoGames from "@/lib/paco_games";
import shuffleArray from "@/context/shuffle_games";
import { normalizeGame } from "@/context/normalize_games";
import Header from "@/components/header";
import CustomSelect from "@/components/CustomSelect";
import onlineGamesIOData from "@/lib/online_games_io";

import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import RepeatingBackground from "@/components/RepeatedBackground";
import Image from "next/image";

const ChevronLeft = () => <FiChevronLeft size={24} />;
const ChevronRight = () => <FiChevronRight size={24} />;

const PAGE_SIZE = 52;
const MAX_VISIBLE_PAGES = 5;

type SortType = "newest" | "oldest";

// Sorting function handling both create_date and date
const sortGames = (games: Game[], sort: SortType): Game[] => {
  return [...games].sort((a, b) => {
    const dateA = a.create_date
      ? new Date(a.create_date).getTime()
      : a.date
        ? new Date(a.date).getTime()
        : 0;
    const dateB = b.create_date
      ? new Date(b.create_date).getTime()
      : b.date
        ? new Date(b.date).getTime()
        : 0;

    if (sort === "newest") return dateB - dateA;
    if (sort === "oldest") return dateA - dateB;
    return 0;
  });
};

export default function AllGamesPage() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState<SortType>("newest");

  const allGames: Game[] = [
    ...HTMLGames.map(normalizeGame),
    ...PacoGames.map(normalizeGame),
    ...onlineGamesIOData.map(normalizeGame),
  ];

  const filteredGames: Game[] = allGames.filter(
    (game) =>
      selectedCategory === "All" ||
      (game.category ?? "Uncategorized") === selectedCategory ||
      game.categories?.includes(selectedCategory),
  );

  const sortedGames = sortGames(filteredGames, sort);

  const totalPages = Math.ceil(sortedGames.length / PAGE_SIZE);
  const paginatedGames = sortedGames.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  const getVisiblePages = () => {
    const start = Math.max(1, page - Math.floor(MAX_VISIBLE_PAGES / 2));
    const end = Math.min(totalPages, start + MAX_VISIBLE_PAGES - 1);

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <main className="min-h-screen w-full font-sans">
      <Header />
      <section className="max-w-6xl mx-auto pt-5 px-4">
        <div className="flex flex-row md:flex-row gap-4 items-start md:items-center justify-between mb-6">
          {/* Category and Sort */}
          <div className="flex gap-3">
            <CustomSelect
              options={["All", ...Categories]}
              value={selectedCategory}
              onChange={(val) => {
                setSelectedCategory(val);
                setPage(1);
              }}
            />
            <CustomSelect
              options={["newest", "oldest"]}
              value={sort}
              onChange={(val) => {
                setSort(val as SortType);
                setPage(1);
              }}
            />
          </div>

          <span className="text-white font-oxanium text-sm md:text-md">
            Showing {sortedGames.length} games
          </span>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: `
              <amp-ad
                width="100vw"
                height="320"
                type="adsense"
                data-ad-client="ca-pub-4392441750573722"
                data-ad-slot="6757411504"
                data-auto-format="rspv"
                data-full-width=""
              >
                <div overflow=""></div>
              </amp-ad>
            `,
          }}
        />

        {/* Game Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
          {paginatedGames.map((game, i) => (
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
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6 pb-6">
          {/* Previous */}
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={`cursor-pointer px-2 py-2 rounded-full font-oxanium font-bold transition-all
      ${
        page === 1
          ? "opacity-50 cursor-not-allowed bg-[#14243a] text-white"
          : "bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] text-white hover:scale-105"
      }
    `}
          >
            <ChevronLeft />
          </button>

          {/* Page Numbers */}
          {getVisiblePages().map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-1 cursor-pointer rounded-full font-oxanium font-bold transition-all
        ${
          p === page
            ? "bg-[#FF3D8E] text-white"
            : "bg-[#14243a] text-white hover:bg-[#1f3654]"
        }
      `}
            >
              {p}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={`cursor-pointer px-2 py-2 rounded-full font-oxanium font-bold transition-all
      ${
        page === totalPages
          ? "opacity-50 cursor-not-allowed bg-[#14243a] text-white"
          : "bg-gradient-to-r from-[#FF3D8E] to-[#BB0051] text-white hover:scale-105"
      }
    `}
          >
            <ChevronRight />
          </button>

          {/* Jump to Page */}
          <div className="flex items-center gap-2 ml-4">
            <span className="text-white font-oxanium text-sm">Go to</span>
            <input
              type="number"
              min={1}
              max={totalPages}
              value={page}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (!isNaN(value)) {
                  setPage(Math.min(totalPages, Math.max(1, value)));
                }
              }}
              className="w-12 px-2 py-1 rounded-md bg-[#14243a] text-white font-oxanium
             border border-[#0ff0fc33] focus:outline-none
             [appearance:textfield]
             [&::-webkit-outer-spin-button]:appearance-none
             [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className="text-white font-oxanium text-sm">
              / {totalPages}
            </span>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <amp-ad
                width="100vw"
                height="320"
                type="adsense"
                data-ad-client="ca-pub-4392441750573722"
                data-ad-slot="6757411504"
                data-auto-format="rspv"
                data-full-width=""
              >
                <div overflow=""></div>
              </amp-ad>
            `,
          }}
        />
      </section>
    </main>
  );
}
