"use client";

import HTMLGames from "@/lib/html_games";
import PacoGames from "@/lib/paco_games";
import onlineGamesIOData from "@/lib/online_games_io";
import { normalizeGame } from "@/context/normalize_games";
import shuffleArray from "@/context/shuffle_games";
import GameCard from "@/components/GameCard";
import { Game } from "@/type/game";
import { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import Header from "@/components/header";
import CustomSelect from "@/components/CustomSelect";

type SortType = "newest" | "oldest";

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

const CategoryPage = () => {
  const router = useRouter();
  const params = useParams();
  const selectedCategory = decodeURIComponent(params.category as string);

  const [sort, setSort] = useState<SortType>("newest");
  const [allGames, setAllGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const htmlGames = HTMLGames.map(normalizeGame);
      const pacoGames = PacoGames.map(normalizeGame);
      const onlineGames = onlineGamesIOData.map(normalizeGame);
      const combined = [...htmlGames, ...pacoGames, ...onlineGames];
      shuffleArray(combined);
      setAllGames(combined);
    };
    fetchGames();
  }, []);

  // Filter games strictly by selected category
  const filteredGames: Game[] = useMemo(() => {
    return allGames.filter(
      (game) =>
        selectedCategory === "All" ||
        game.category === selectedCategory ||
        (game.categories?.includes(selectedCategory) ?? false),
    );
  }, [allGames, selectedCategory]);

  const sortedGames = useMemo(
    () => sortGames(filteredGames, sort),
    [filteredGames, sort],
  );

  return (
    <main>
      <Header />

      <section className="max-w-7xl mx-auto pt-5 px-2 md:px-4">
        {/* Sort */}
        <div className="flex flex-row md:flex-row gap-4 items-start md:items-center justify-between mb-6">
          <div className="flex gap-2 w-full md:w-auto">
            <CustomSelect
              options={["newest", "oldest"]}
              value={sort}
              onChange={(val) => {
                setSort(val as SortType);
              }}
            />
          </div>

          <span className="text-white font-oxanium text-sm">
            Showing {sortedGames.length} games in &quot;
            {decodeURIComponent(selectedCategory)}&quot;
          </span>
        </div>

        {/* Game Grid */}
        <div className="flex flex-wrap -mx-2">
          {sortedGames.length === 0 ? (
            <p className="text-[#b6c6e3] text-sm flex items-center justify-center w-full h-screen">
              No games found.
            </p>
          ) : (
            sortedGames.map((game) => (
              <div
                key={game.id}
                className="
                  px-1 mb-4
                  w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5
                  flex-shrink-0
                "
              >
                <GameCard
                  id={game.id}
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
                  create_date={game.create_date || game.date}
                  date={game.date}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
