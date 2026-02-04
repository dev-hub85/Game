"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const DynamicMeta = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.startsWith("/play-game")) {
      document.title =
        "Neo Games Play thousands of free HTML5 games online. No downloads, no registration required. Just pure gaming fun!";
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          "Explore Neo Games for the best online gaming experience. Play top-rated games, discover new releases, and join a vibrant gaming community.",
        );
      document
        .querySelector('meta[name="keywords"]')
        ?.setAttribute(
          "content",
          [
            "best online games",
            "top-rated games",
            "new game releases",
            "multiplayer gaming",
            "free games online",
            "gaming community",
            "game reviews",
            "game guides",
            "retro gaming",
            "online gaming hub",
          ].join(", "),
        );
    }
  }, [pathname]);

  return null;
};

export default DynamicMeta;
