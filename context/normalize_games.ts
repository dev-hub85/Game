import { Game } from "@/type/game";

export const normalizeGame = (game: any): Game => ({
  ...game,
  image: game.image === null ? undefined : game.image,
  thumbnail: game.thumbnail === null ? undefined : game.thumbnail,
});
