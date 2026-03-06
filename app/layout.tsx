import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Oxanium } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import RepeatingBackground from "@/components/RepeatedBackground";
import { UserProvider } from "@/context/UserContext";
import DynamicMeta from "@/components/DynamicMeta";
import Script from "next/script";
import { Bree_Serif } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a1628" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1628" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://neogames.space"),

  title: {
    default:
      "Free Online Games – Play HTML5 Browser Games, Card, Puzzle & Racing Games | NeoGames",
    template: "%s | Free Online Games - NeoGames",
  },

  description:
    "Play the best free online games with no downloads required on NeoGames. Discover thousands of HTML5 browser games including spider solitaire, card games, puzzle games, racing games, arcade games, multiplayer games, and kids games online. Enjoy unblocked games, snake game, crossword puzzles, math games, and action games that work perfectly on mobile and desktop browsers. Start playing free games online instantly.",

  keywords: [
    "free online games",
    "free games",
    "free games online",
    "spider solitaire",
    "card games",
    "board games",
    "snow games",
    "car games",
    "play games online free",
    "best online games",
    "no download games",
    "HTML5 games",
    "browser games",
    "unblocked games",
    "games snake game",
    "free multiplayer games",
    "kids games online",
    "action games online",
    "puzzle games free",
    "racing games online",
    "arcade games",
    "mobile browser games",
    "instant play games",
    "NeoGames",
    "free crossword puzzles",
    "ree online games about money",
    "free online games for kids",
    "online math game",
    "free online games for girls",
    "free online games on google",
    "free online games with no downloads",
  ],

  authors: [{ name: "NeoGames Team", url: "https://neogames.space" }],
  creator: "NeoGames",
  publisher: "NeoGames",
  generator: "Next.js",

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

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/manifest.json",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neogames.space",
    siteName: "NeoGames",
    title:
      "Free Online Games – Play HTML5 Browser Games, Card, Puzzle & Racing Games | NeoGames",
    description:
      "Play the best free online games with no downloads required on NeoGames. Discover thousands of HTML5 browser games including spider solitaire, card games, puzzle games, racing games, arcade games, multiplayer games, and kids games online. Enjoy unblocked games, snake game, crossword puzzles, math games, and action games that work perfectly on mobile and desktop browsers. Start playing free games online instantly.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Online Games - NeoGames",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Free Online Games – Play HTML5 Browser Games, Card, Puzzle & Racing Games | NeoGames",
    description:
      "Play the best free online games with no downloads required on NeoGames. Discover thousands of HTML5 browser games including spider solitaire, card games, puzzle games, racing games, arcade games, multiplayer games, and kids games online. Enjoy unblocked games, snake game, crossword puzzles, math games, and action games that work perfectly on mobile and desktop browsers. Start playing free games online instantly.",
    images: ["/twitter-image.png"],
  },

  applicationName: "NeoGames",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "NeoGames",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  category: "games",

  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "https://neogames.space",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags */}
        <meta name="msapplication-TileColor" content="#0a1628" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="monetag" content="44437e9ce6891d5f15e2779bd502f125"></meta>
        <meta
          name="google-adsense-account"
          content="ca-pub-4392441750573722"
        ></meta>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#BB0051" />
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4392441750573722"
          crossOrigin="anonymous"
        />
        <script
          async
          custom-element="amp-ad"
          src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
        ></script>
        <script
          src="https://5gvci.com/act/files/tag.min.js?z=10640324"
          data-cfasync="false"
          async
        ></script>
        <Script
          id="nap5k-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(s) {
                s.dataset.zone = "10640199";
                s.src = "https://nap5k.com/tag.min.js";
              })([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${oxanium.variable} antialiased`}>
        <DynamicMeta />
        <UserProvider>
          <RepeatingBackground>
            <div className="flex min-h-screen">
              {/* Sidebar */}
              <Sidebar />

              {/* Content Area */}
              <div className="flex flex-col flex-1 h-screen overflow-y-auto hide-scrollbar">
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </RepeatingBackground>
        </UserProvider>
      </body>
    </html>
  );
}
