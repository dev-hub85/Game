import React from "react";
import HTMLGames from "@/lib/html_games";
import PacoGames from "@/lib/paco_games";
import onlineGamesIOData from "@/lib/online_games_io";
import { Game } from "@/type/game";

function normalizeGame(game: any): Game {
  return {
    ...game,
    image: game.image === null ? undefined : game.image,
    thumbnail: game.thumbnail === null ? undefined : game.thumbnail,
  };
}

export function getGameById(id: string): Game | undefined {
  const htmlGame = HTMLGames.find((g: { id: string }) => g.id === id);
  if (htmlGame) return normalizeGame(htmlGame);
  const pacoGame = PacoGames.find((g: { id: string }) => g.id === id);
  if (pacoGame) return normalizeGame(pacoGame);
  const onlineGames = onlineGamesIOData.find(
    (g: { id: string }) => g.id === id,
  );
  if (onlineGames) return normalizeGame(onlineGames);
  return undefined;
}
