import type { Metadata } from "next";
import categoriesMeta from "@/lib/categories_meta";

type Props = {
  params: Promise<{ category: string }>;
  children: React.ReactNode;
};

const baseUrl = "https://neogames.space";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  console.log("Generating metadata for category:", category);

  const decodedCategory = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\b3d\b/gi, "3D")
    .replace(/\bmmo\b/gi, "MMO");

  console.log("Decoded category for metadata:", decodedCategory);

  const meta = categoriesMeta[decodedCategory];

  const canonicalUrl = `${baseUrl}/category/${category}`;

  if (!meta) {
    const title = `${decodedCategory} Games | Play Free Online Games`;
    const description = `Play the best ${decodedCategory} games online for free on NeoGames. No downloads required. Start playing instantly in your browser.`;

    return {
      metadataBase: new URL(baseUrl),

      title,
      description,

      keywords: [
        decodedCategory.toLowerCase(),
        `${decodedCategory.toLowerCase()} games`,
        "online games",
        "free games",
        "browser games",
      ],

      alternates: {
        canonical: canonicalUrl,
      },

      openGraph: {
        title,
        description,
        url: canonicalUrl,
        type: "website",
        siteName: "NeoGames",
      },

      twitter: {
        card: "summary_large_image",
        title,
        description,
      },

      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  const title = meta.title;
  const description = meta.description;

  return {
    metadataBase: new URL(baseUrl),

    title,
    description,

    keywords: meta.keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "NeoGames",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function CategoryLayout({ children }: Props) {
  return <>{children}</>;
}
