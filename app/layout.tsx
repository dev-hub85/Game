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
  // Basic Metadata
  title: {
    default:
      "Neo Games Play thousands of free HTML5 games online. No downloads, no registration required. Just pure gaming fun!",
    template: "%s | NeoGames",
  },
  description:
    "NeoGames is your ultimate gaming hub. Discover the latest games, play exciting titles online, explore retro classics, and level up your gaming experience.",
  keywords: [
    "online games",
    "play games online",
    "gaming website",
    "retro games",
    "new game releases",
    "multiplayer games",
    "free online games",
    "game reviews",
    "game guides",
    "gaming community",
    "NeoGames",
    "browser games",
    "casual games",
    "action games",
    "puzzle games",
  ],
  authors: [{ name: "NeoGames Team", url: "https://neogames.space" }],
  creator: "NeoGames",
  publisher: "NeoGames",
  generator: "Next.js",

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Favicons and Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // Manifest
  manifest: "/manifest.json",

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neogames.space",
    siteName: "NeoGames",
    title: "NeoGames - Play, Discover & Master Games Online",
    description:
      "NeoGames is your ultimate gaming hub. Discover the latest games, play exciting titles online, explore retro classics, and level up your gaming experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeoGames - Your Ultimate Gaming Hub",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 600,
        height: 600,
        alt: "NeoGames Logo",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@neogames",
    creator: "@neogames",
    title: "NeoGames - Play, Discover & Master Games Online",
    description:
      "NeoGames is your ultimate gaming hub. Discover the latest games, play exciting titles online, explore retro classics, and level up your gaming experience.",
    images: ["/twitter-image.png"],
  },

  // App Links
  applicationName: "NeoGames",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "NeoGames",
  },

  // Format Detection
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  // Category
  category: "games",

  // Other
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://neogames.space"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
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
