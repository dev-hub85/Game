import { notFound } from "next/navigation";
import PlayGameLayout from "./PlayGameLayout";
import PlayGameClient from "@/components/PlayGameClient";
import { getGameById } from "@/components/PlayGameServer";
import HTMLGames from "@/lib/html_games";
import PacoGames from "@/lib/paco_games";
import onlineGamesIOData from "@/lib/online_games_io";
import { Game } from "@/type/game";
import { Metadata } from "next";

// Generate static paths for SSG
export async function generateStaticParams() {
  return [
    ...HTMLGames.map((game) => ({ id: game.id })),
    ...PacoGames.map((game) => ({ id: game.id })),
    ...onlineGamesIOData.map((game) => ({ id: game.id })),
  ];
}

interface PlayGamePageProps {
  params: Promise<{ id: string }>;
}

// Fully SEO-optimized metadata
export async function generateMetadata({
  params,
}: PlayGamePageProps): Promise<Metadata> {
  const id = (await params).id;
  const game = getGameById(id);

  if (!game) {
    return {
      title: "Game Not Found | NeoGames",
      description: "This game does not exist on NeoGames.",
      robots: { index: false, follow: false },
    };
  }

  const description =
    game.description ||
    game.translations?.en?.description ||
    "Play this exciting game online at NeoGames.";

  // Take first 4 capitalized words from description as tags
  const tags = (game.category ? [game.category] : [])
    .concat(description.match(/\b([A-Z][a-z]+)\b/g) || [])
    .slice(0, 4);

  const keywordsArray: string[] = [
    game.name,
    game.category || (game.categories && game.categories[0]) || "game",
    ...tags,
  ];

  const url = `https://neogames.space/play-game/${game.id}`;

  return {
    metadataBase: new URL("https://neogames.space"),

    title: `${game.name} - Play Online at NeoGames`,
    description,

    keywords: keywordsArray.join(", "),

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${game.name} - Play Online at NeoGames`,
      description,
      url,
      siteName: "NeoGames",
      type: "website",
      images: [
        {
          url:
            game.thumb3 ||
            game.thumb2 ||
            game.thumb1 ||
            game.thumbnail ||
            game.image ||
            "/default-game.jpg",
          width: 1200,
          height: 630,
          alt: game.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${game.name} - Play Online at NeoGames`,
      description,
      images: [game.thumbnail || game.image || "/default-game.jpg"],
    },
  };
}

const PlayGamePage = async ({ params }: PlayGamePageProps) => {
  const id = (await params).id;
  const game = getGameById(id);
  if (!game) return notFound();

  const normalizeGame = (game: any): Game => ({
    ...game,
    image: game.image === null ? undefined : game.image,
    thumbnail: game.thumbnail === null ? undefined : game.thumbnail,
  });

  const allGames: Game[] = [
    ...HTMLGames.map(normalizeGame),
    ...PacoGames.map(normalizeGame),
    ...onlineGamesIOData.map(normalizeGame),
  ];

  const similarGames = allGames.filter(
    (g) =>
      g.id !== game.id &&
      (g.category === game.category ||
        (g.categories?.includes(game.category) ?? false)),
  );

  const controls =
    game.instructions ||
    game.translations?.en?.instructions ||
    "Arrow Keys to Steer, Space to boost, Shift to drift";

  const about =
    game.description ||
    game.translations?.en?.description ||
    "No description available.";

  const tags = (game.category ? [game.category] : [])
    .concat(about.match(/\b([A-Z][a-z]+)\b/g) || [])
    .slice(0, 4);

  return (
    <PlayGameLayout
      game={game}
      similarGames={similarGames}
      about={about}
      controls={controls}
      tags={tags}
    >
      {game.url ? (
        <PlayGameClient url={game.url} name={game.name} />
      ) : (
        <div className="flex flex-col items-center justify-center h-80 w-full">
          <div className="text-5xl mb-4">🎮</div>
          <div className="text-[#4ecbff] font-bold text-lg mb-2">
            Game Player
          </div>
          <div className="text-[#b6c6e3] text-sm">
            In production, the game would load here via iframe
          </div>
          <div className="text-[#4ecbff] text-xs mt-2">
            URL: {game.url || "N/A"}
          </div>
        </div>
      )}
    </PlayGameLayout>
  );
};

export default PlayGamePage;
