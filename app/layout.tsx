import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxanium } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import RepeatingBackground from "@/components/RepeatedBackground";
import { UserProvider } from "@/context/UserContext";

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

export const metadata: Metadata = {
  title: "NeoGames - Play, Discover & Master Games Online",
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
  ].join(", "),
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${oxanium.variable} antialiased`}>
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
