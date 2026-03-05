import { normalizeGame } from "@/context/normalize_games";
import Categories from "@/lib/categories";
import HTMLGames from "@/lib/html_games";
import onlineGamesIOData from "@/lib/online_games_io";
import PacoGames from "@/lib/paco_games";
import { Game } from "@/type/game";

const baseUrl = "https://neogames.space";

const allGames: Game[] = [
  ...HTMLGames.map(normalizeGame),
  ...PacoGames.map(normalizeGame),
  ...onlineGamesIOData.map(normalizeGame),
];

const now = new Date().toISOString();

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function slugify(str: string) {
  return str.toLowerCase().trim().replace(/\s+/g, "-");
}

export async function GET() {
  const staticPages = [
    { path: "/", changefreq: "daily", priority: "1.0" },
    { path: "/about", changefreq: "monthly", priority: "0.6" },
    { path: "/all-games", changefreq: "weekly", priority: "0.9" },
    { path: "/contact", changefreq: "monthly", priority: "0.6" },
    { path: "/faq", changefreq: "monthly", priority: "0.6" },
    { path: "/privacy-policy", changefreq: "yearly", priority: "0.4" },
    { path: "/terms-of-service", changefreq: "yearly", priority: "0.4" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>

<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>

${staticPages
  .map(
    (page) => `
<url>
  <loc>${escapeXml(baseUrl + page.path)}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>${page.changefreq}</changefreq>
  <priority>${page.priority}</priority>
</url>`,
  )
  .join("")}

${Categories.map(
  (category) => `
<url>
  <loc>${escapeXml(baseUrl + "/category/" + slugify(category))}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>`,
).join("")}

${allGames
  .map(
    (game) => `
<url>
  <loc>${escapeXml(baseUrl + "/play-game/" + game.id)}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>`,
  )
  .join("")}

</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

export const dynamic = "force-dynamic";
export const maxDuration = 60;
