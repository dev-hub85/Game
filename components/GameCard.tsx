"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface GameCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  create_date?: string;
  date?: string;
  thumb: string;
  hot?: boolean;
  rating?: number;
  views?: number;
  playCount?: number;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  name,
  category,
  create_date,
  date,
  description,
  thumb,
  hot,
  rating,
  views,
  playCount,
}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);

  // Compute isNew based on last 2 months
  let isNew = false;
  const now = new Date();
  const dateToCheck: string | undefined = create_date || date;
  if (dateToCheck) {
    const d = new Date(dateToCheck);
    if (!isNaN(d.getTime())) {
      const previousMonthStart = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        1,
      );
      if (d >= previousMonthStart && d <= now) isNew = true;
    }
  }

  const handleNavigate = (e: React.MouseEvent) => {
    if (!clicked) {
      setClicked(true);
      window.open("https://omg10.com/4/10640280", "_blank");
    } else {
      router.push(`/play-game/${id}`);
    }
  };

  return (
    <div
      onClick={handleNavigate}
      className="
group relative cursor-pointer flex-shrink-0
sm:basis-[48%]
md:basis-[44%] lg:basis-[34%] xl:basis-[26%]

aspect-[4/3]
md:aspect-[4/3.35]

max-h-[180px]
md:max-h-[260px] lg:max-h-[280px] xl:max-h-[300px]

rounded-2xl overflow-hidden shadow-xl
border border-[#0ff0fc22]
transition-transform duration-500 scale-95 hover:scale-100



  "
    >
      {/* Image */}
      <div className="relative w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          {/* Loader */}
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
            </div>
          )}

          {/* Image */}
          <Image
            src={thumb}
            alt={name}
            fill
            loading="lazy"
            quality={100}
            onLoad={() => setLoading(false)}
            className={`w-full h-full object-fill transition-transform duration-500 group-hover:scale-105 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-20 blur-sm animate-[shine_2s_linear_infinite]" />
        </div>

        {/* NEW/HOT badges */}
        <div className="absolute top-2 left-2 flex gap-2 z-10">
          {isNew && (
            <span className="bg-[#010419] text-white text-xs font-bold px-2 py-0.5 rounded-full font-oxanium shadow">
              NEW
            </span>
          )}
          {hot && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full font-oxanium shadow">
              HOT
            </span>
          )}
        </div>

        {/* Hover overlay content */}
        <div
          className="absolute inset-0 bg-[#E0146F]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
          onClick={(e) => {
            if (!clicked) {
              setClicked(true);
              window.open("https://omg10.com/4/10640280", "_blank");
            } else {
              router.push(`/play-game/${id}`);
            }
          }}
        >
          <h3 className="text-white font-oxanium font-bold text-sm md:text-xl mb-1 line-clamp-2">
            {name}
          </h3>
          <p className="hidden md:block text-gray-200 text-xs md:text-sm">
            {description.length > 50
              ? description.slice(0, 50) + "..."
              : description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
