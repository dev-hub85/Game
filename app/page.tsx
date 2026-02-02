"use client";
import HeroSection from "../components/HeroSection";
import TrendingGames from "../components/TrendingGames";
import GameCategories from "../components/GameCategories";
import FeaturedGames from "../components/FeaturedGames";
import NewArrivals from "../components/NewArrivals";
import Header from "@/components/header";
import RepeatingBackground from "@/components/RepeatedBackground";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full font-sans">
        <Header />
        <HeroSection />
        <FeaturedGames />
        <GameCategories />
        <NewArrivals />
      </main>{" "}
    </>
  );
}
