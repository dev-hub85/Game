"use client";

import Header from "@/components/header";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // General Questions
  {
    category: "General",
    question: "Are all games really free?",
    answer:
      "Yes! All games on our platform are 100% free to play with no hidden costs, subscriptions, or in-app purchases required. You can enjoy unlimited gaming without spending a penny.",
  },
  {
    category: "General",
    question: "How often are new games added?",
    answer:
      "We regularly update our library with new games every week. Our team is constantly curating and adding fresh content to ensure you always have exciting new games to discover.",
  },
  {
    category: "General",
    question: "Can I play on mobile devices?",
    answer:
      "Absolutely! Our platform is fully responsive and optimized for all devices including smartphones, tablets, laptops, and desktops. Play anytime, anywhere!",
  },

  // Technical Questions
  {
    category: "Technical",
    question: "Do I need to download anything?",
    answer:
      "No downloads or installations are required! All games run directly in your web browser. Just click and play instantly without any setup or waiting time.",
  },
  {
    category: "Technical",
    question: "Which browsers are supported?",
    answer:
      "Our games work on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. We recommend keeping your browser updated for the best gaming experience.",
  },
  {
    category: "Technical",
    question: "Why is a game not loading?",
    answer:
      "If a game doesn't load, try refreshing the page, clearing your browser cache, or checking your internet connection. Make sure JavaScript is enabled in your browser settings.",
  },
  {
    category: "Technical",
    question: "Can I play games offline?",
    answer:
      "Our games require an internet connection to play as they are browser-based. However, once a game loads, it may continue working with a slower or intermittent connection.",
  },

  // Game Questions
  {
    category: "Games",
    question: "How many games are available?",
    answer:
      "We currently have over 2000+ free games across various categories including action, puzzle, racing, sports, strategy, and many more genres.",
  },
  {
    category: "Games",
    question: "Can I suggest a game to add?",
    answer:
      "Absolutely! We love hearing from our community. Use our contact form to share your game suggestions, and we'll review them for potential addition to our platform.",
  },
  {
    category: "Games",
    question: "How do I find specific games?",
    answer:
      "Use our search bar at the top of the page to find specific games by name. You can also browse by categories or check our featured and trending sections for popular games.",
  },

  // Safety & Privacy
  {
    category: "Safety",
    question: "Are the games safe for children?",
    answer:
      "We carefully curate our game collection to ensure family-friendly content. However, we recommend parental supervision for younger children and checking individual game ratings.",
  },
  {
    category: "Safety",
    question: "Do you collect personal information?",
    answer:
      "We respect your privacy and only collect minimal data necessary to provide our services. We do not sell or share your personal information. Check our privacy policy for details.",
  },
  {
    category: "Safety",
    question: "Is my data secure?",
    answer:
      "Yes! We use industry-standard security measures to protect your data. All connections are encrypted, and we follow best practices for data protection and privacy.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(faqData.map((item) => item.category))),
  ];

  const filteredFAQs =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen w-full font-sans">
      <Header />

      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-oxanium text-white mb-4">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] mx-auto mb-6"></div>
          <p className="text-[#b6c6e3] text-lg md:text-xl max-w-3xl mx-auto">
            Find answers to common questions about our gaming platform
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-oxanium font-bold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] text-white"
                  : "bg-[#14243a] text-[#b6c6e3] hover:bg-[#1f3654]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#14243a] rounded-xl border border-[#0ff0fc33] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#1a2f4a] transition-colors"
              >
                <div className="flex-1">
                  <span className="inline-block px-2 py-1 text-xs font-oxanium font-bold bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] text-white rounded mb-2">
                    {faq.category}
                  </span>
                  <h3 className="text-lg font-bold font-oxanium text-white">
                    {faq.question}
                  </h3>
                </div>
                <div className="ml-4">
                  {openIndex === index ? (
                    <FiChevronUp className="text-[#FF3D8E] text-2xl" />
                  ) : (
                    <FiChevronDown className="text-[#b6c6e3] text-2xl" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-[#0ff0fc33] bg-[#0a1628]">
                  <p className="text-[#b6c6e3] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions section */}
        <div className="bg-gradient-to-br from-[#BB0051] to-[#FF3D8E] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here
            to help!
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-8 py-3 rounded-lg font-oxanium font-bold text-[#BB0051] bg-white hover:bg-gray-100 transition-colors"
          >
            Contact Support
          </button>
        </div>
      </section>
    </main>
  );
}
