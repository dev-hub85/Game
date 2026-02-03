"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Game } from "@/type/game";
import HTMLGames from "@/lib/html_games";
import { normalizeGame } from "@/context/normalize_games";
import IconButton from "./IconButton";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ChevronLeft = () => <FiChevronLeft size={24} />;
const ChevronRight = () => <FiChevronRight size={24} />;

const HeroSection = () => {
  const router = useRouter();

  /* ---------------- Featured Games ---------------- */
  const featured: Game[] = useMemo(
    () => HTMLGames.slice(27, 39).map(normalizeGame),
    [],
  );

  /* ---------- Pre-computed slides for both layouts ---------- */
  const mobileSlides: Game[][] = useMemo(() => {
    const slides: Game[][] = [];
    for (let i = 0; i < featured.length; i += 1) {
      slides.push(featured.slice(i, i + 1));
    }
    return slides;
  }, [featured]);

  const desktopSlides: Game[][] = useMemo(() => {
    const slides: Game[][] = [];
    for (let i = 0; i < featured.length; i += 2) {
      slides.push(featured.slice(i, i + 2));
    }
    return slides;
  }, [featured]);

  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  const nextMobile = () => setMobileIndex((i) => (i + 1) % mobileSlides.length);
  const prevMobile = () =>
    setMobileIndex((i) => (i - 1 + mobileSlides.length) % mobileSlides.length);
  const nextDesktop = () =>
    setDesktopIndex((i) => (i + 1) % desktopSlides.length);
  const prevDesktop = () =>
    setDesktopIndex(
      (i) => (i - 1 + desktopSlides.length) % desktopSlides.length,
    );

  /* ---------- Auto-slide every 5 seconds ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((i) => (i + 1) % mobileSlides.length);
      setDesktopIndex((i) => (i + 1) % desktopSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mobileSlides.length, desktopSlides.length]);

  const GameCard = ({ game }: { game: Game }) => (
    <div
      onClick={() => router.push(`/play-game/${game.id}`)}
      className="relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <Image
        src={game.thumb8 || game.thumb7 || game.thumb1 || ""}
        alt={game.name}
        fill
        className="object-fill transition duration-500 group-hover:scale-105"
      />

      {/* White shine effect */}
      <div
        className="pointer-events-none absolute inset-0
          bg-gradient-to-tr from-white/0 via-white/20 to-white/0
          opacity-0 group-hover:opacity-100
          translate-x-[-100%] group-hover:translate-x-[100%]
          transition-all duration-700 ease-out"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 p-6 text-left">
        <p className="text-white text-lg line-clamp-2 max-w-md font-bold font-oxanium">
          {game.description || ""}
        </p>
        <span className="inline-block mt-1 text-sm font-semibold text-white/80">
          {game.category || ""}
        </span>
      </div>
    </div>
  );

  return (
    <section className="relative w-full pt-5 md:pt-5 px-2 md:px-6 pb-5 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* ---------- Mobile Carousel (1 card) - Hidden on md+ ---------- */}
        <div className="md:hidden overflow-hidden rounded-3xl relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
          >
            {mobileSlides.map((group, i) => (
              <div key={i} className="min-w-full grid grid-cols-1 gap-6 px-2">
                {group.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            ))}
          </div>

          {/* Mobile Carousel Controls */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <IconButton
              onClick={prevMobile}
              className="cursor-pointer pointer-events-auto -left-5 bg-gradient-to-r from-[#BB0051] to-[#E0146F]"
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={nextMobile}
              className="cursor-pointer pointer-events-auto -right-5 bg-gradient-to-r from-[#E0146F] to-[#BB0051]"
            >
              <ChevronRight />
            </IconButton>
          </div>
        </div>

        {/* ---------- Desktop Carousel (2 cards) - Hidden on mobile ---------- */}
        <div className="hidden md:block overflow-hidden rounded-3xl relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${desktopIndex * 100}%)` }}
          >
            {desktopSlides.map((group, i) => (
              <div key={i} className="min-w-full grid grid-cols-2 gap-6 px-2">
                {group.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            ))}
          </div>

          {/* Desktop Carousel Controls */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <IconButton
              onClick={prevDesktop}
              className="cursor-pointer pointer-events-auto -left-6 bg-gradient-to-r from-[#BB0051] to-[#E0146F]"
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={nextDesktop}
              className="cursor-pointer pointer-events-auto -right-6 bg-gradient-to-r from-[#E0146F] to-[#BB0051]"
            >
              <ChevronRight />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
