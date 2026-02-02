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
    () => HTMLGames.slice(26, 36).map(normalizeGame),
    [],
  );

  /* ---------- Responsive cards per slide ---------- */
  const [cardsPerSlide, setCardsPerSlide] = useState(2);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      setCardsPerSlide(window.innerWidth < 768 ? 1 : 2);
    };
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  /* ---------- Split slides dynamically ---------- */
  const slides: Game[][] = [];
  for (let i = 0; i < featured.length; i += cardsPerSlide) {
    slides.push(featured.slice(i, i + cardsPerSlide));
  }

  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative w-full pt-5 md:pt-5 px-2 md:px-6 pb-5 overflow-hidden
"
    >
      <div className="mx-auto max-w-6xl">
        {/* ---------- Featured Carousel ---------- */}
        <div className="overflow-hidden rounded-3xl relative">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((group, i) => (
              <div
                key={i}
                className={`min-w-full grid gap-6 px-2 ${
                  cardsPerSlide === 1 ? "grid-cols-1" : "grid-cols-2"
                }`}
              >
                {group.map((game) => (
                  <div
                    key={game.id}
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
                ))}
              </div>
            ))}
          </div>

          {/* ---------- Carousel Controls (Half Outside) ---------- */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <IconButton
              onClick={prev}
              className="cursor-pointer pointer-events-auto -left-5 md:-left-6 bg-gradient-to-r from-[#BB0051] to-[#E0146F]"
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              onClick={next}
              className="cursor-pointer pointer-events-auto -right-5 md:-right-6 bg-gradient-to-r from-[#E0146F] to-[#BB0051]"
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
