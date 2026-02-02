"use client";

import Header from "@/components/header";
import { FiPlay, FiUsers, FiZap, FiHeart } from "react-icons/fi";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full font-sans">
      <Header />

      <section className="max-w-6xl mx-auto px-4 py-4 md:py-8">
        {/* Hero Section */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold font-oxanium text-white mb-4">
            About Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] mx-auto mb-6"></div>
          <p className="text-[#b6c6e3] text-lg md:text-xl max-w-3xl mx-auto">
            Your ultimate destination for free online gaming entertainment
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-[#14243a] to-[#1a2f4a] rounded-2xl p-6 md:p-10 mb-6 border border-[#0ff0fc33]">
          <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-4">
            Our Mission
          </h2>
          <p className="text-[#b6c6e3] text-base md:text-lg leading-relaxed mb-4">
            We are dedicated to providing gamers worldwide with instant access
            to thousands of high-quality free games. Our platform brings
            together the best browser-based games across all genres, ensuring
            there's something for everyone - from casual players to hardcore
            gaming enthusiasts.
          </p>
          <p className="text-[#b6c6e3] text-base md:text-lg leading-relaxed">
            No downloads, no installations, no barriers - just pure gaming fun
            at your fingertips.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white text-center mb-8">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Access */}
            <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33] hover:border-[#FF3D8E] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] rounded-full flex items-center justify-center mb-4">
                <FiPlay className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold font-oxanium text-white mb-2">
                100% Free
              </h3>
              <p className="text-[#b6c6e3] text-sm">
                All our games are completely free to play. No hidden costs, no
                subscriptions.
              </p>
            </div>

            {/* Community */}
            <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33] hover:border-[#FF3D8E] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] rounded-full flex items-center justify-center mb-4">
                <FiUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold font-oxanium text-white mb-2">
                Community First
              </h3>
              <p className="text-[#b6c6e3] text-sm">
                Built by gamers, for gamers. We listen to our community and
                continuously improve.
              </p>
            </div>

            {/* Instant Play */}
            <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33] hover:border-[#FF3D8E] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] rounded-full flex items-center justify-center mb-4">
                <FiZap className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold font-oxanium text-white mb-2">
                Instant Play
              </h3>
              <p className="text-[#b6c6e3] text-sm">
                No downloads required. Click and play instantly from any device
                with a browser.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33] hover:border-[#FF3D8E] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] rounded-full flex items-center justify-center mb-4">
                <FiHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold font-oxanium text-white mb-2">
                Quality Games
              </h3>
              <p className="text-[#b6c6e3] text-sm">
                Hand-picked selection of the best games across all genres and
                categories.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] rounded-2xl p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold font-oxanium text-white mb-2">
                2000+
              </div>
              <p className="text-white/90 font-oxanium">Free Games</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-oxanium text-white mb-2">
                24/7
              </div>
              <p className="text-white/90 font-oxanium">Available</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-oxanium text-white mb-2">
                100%
              </div>
              <p className="text-white/90 font-oxanium">Free to Play</p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white text-center mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33]">
              <h3 className="text-xl font-bold font-oxanium text-white mb-3">
                Diverse Game Library
              </h3>
              <p className="text-[#b6c6e3] text-sm leading-relaxed">
                From action-packed adventures to brain-teasing puzzles, racing
                games to strategy challenges - our extensive collection covers
                every gaming preference and skill level.
              </p>
            </div>

            <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33]">
              <h3 className="text-xl font-bold font-oxanium text-white mb-3">
                Regular Updates
              </h3>
              <p className="text-[#b6c6e3] text-sm leading-relaxed">
                We constantly add new games to our platform, ensuring you always
                have fresh content to explore and enjoy. Check back regularly
                for the latest additions.
              </p>
            </div>

            <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33]">
              <h3 className="text-xl font-bold font-oxanium text-white mb-3">
                Cross-Platform Gaming
              </h3>
              <p className="text-[#b6c6e3] text-sm leading-relaxed">
                Play on any device - desktop, laptop, tablet, or mobile. Our
                games are optimized to work seamlessly across all platforms and
                screen sizes.
              </p>
            </div>

            <div className="bg-[#14243a] rounded-xl p-6 border border-[#0ff0fc33]">
              <h3 className="text-xl font-bold font-oxanium text-white mb-3">
                Easy Navigation
              </h3>
              <p className="text-[#b6c6e3] text-sm leading-relaxed">
                Find your favorite games quickly with our intuitive categories,
                search functionality, and curated collections of trending and
                featured games.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-gradient-to-br from-[#14243a] to-[#1a2f4a] rounded-2xl p-6 md:p-10 border border-[#0ff0fc33] text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-4">
            Our Commitment to You
          </h2>
          <p className="text-[#b6c6e3] text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            We're committed to maintaining a safe, enjoyable gaming environment
            for players of all ages. Our team carefully curates and reviews all
            games to ensure quality content and a positive experience for
            everyone.
          </p>
          <p className="text-[#b6c6e3] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Thank you for choosing us as your gaming destination. Happy gaming!
          </p>
        </div>
      </section>
    </main>
  );
}
