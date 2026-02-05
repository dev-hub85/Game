import type { Metadata } from "next";
import categoriesMeta from "@/lib/categories_meta";

type Props = {
  params: Promise<{ category: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const meta = categoriesMeta[decodedCategory];

  if (!meta) {
    return {
      title: `${decodedCategory} Games`,
      description: `Play the best ${decodedCategory} games online for free. No downloads required.`,
      keywords: [
        decodedCategory.toLowerCase(),
        "games",
        "online games",
        "free games",
      ],
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      siteName: "NeoGames",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default function CategoryLayout({ children }: Props) {
  return <>{children}</>;
}
