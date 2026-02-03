"use client";

import { useEffect, useState } from "react";
import { incrementHits } from "@/lib/hits";

interface HitsCounterProps {
  gameId: string;
  initialHits: number;
}

export default function HitsCounter({ gameId, initialHits }: HitsCounterProps) {
  const [hits, setHits] = useState(initialHits);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trackHit = async () => {
      const newHits = await incrementHits(gameId);
      if (newHits > 0) {
        setHits(newHits);
      }
      setLoading(false);
    };
    trackHit();
  }, [gameId]);

  return (
    <span className="text-white text-sm flex items-center gap-1">
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          fill="#FF3D8E"
          d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z"
        />
      </svg>
      {loading ? (
        <span className="inline-flex items-center gap-1">
          <span className="w-4 h-4 relative">
            <span className="absolute inset-0 rounded-full border-2 border-[#FF3D8E]/30"></span>
            <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#FF3D8E] animate-spin"></span>
          </span>
          <span className="animate-pulse">Loading</span>
        </span>
      ) : (
        <span>{hits} Plays</span>
      )}
    </span>
  );
}
