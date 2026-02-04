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
const cat = Categories;

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(request: Request) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${escapeXml(baseUrl + "/")}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${escapeXml(baseUrl + "/about")}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${escapeXml(baseUrl + "/all-games")}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  ${cat
    .map(
      (category) => `  <url>
    <loc>${escapeXml(baseUrl + "/category/" + category)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    )
    .join("\n")}
  <url>
    <loc>${escapeXml(baseUrl + "/contact")}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${escapeXml(baseUrl + "/faq")}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  ${allGames
    .map(
      (game) => `  <url>
    <loc>${escapeXml(baseUrl + "/play-game/" + game.id)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`,
    )
    .join("\n")}
  <url>
    <loc>${escapeXml(baseUrl + "/privacy-policy")}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${escapeXml(baseUrl + "/search")}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${escapeXml(baseUrl + "/terms-of-service")}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

export const maxDuration = 60;
export const dynamic = "force-dynamic";
