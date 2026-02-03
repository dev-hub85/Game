"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiMaximize, FiMinimize } from "react-icons/fi";

interface PlayGameClientProps {
  url: string;
  name: string;
}

const PlayGameClient: React.FC<PlayGameClientProps> = ({ url, name }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleFullscreen = () => {
    setFullscreen((prev) => !prev);
  };

  // Lock scroll when fullscreen
  useEffect(() => {
    document.body.style.overflow = fullscreen ? "hidden" : "auto";
  }, [fullscreen]);

  return (
    <div className="relative w-full">
      {/* Control Button */}
      <button
        onClick={toggleFullscreen}
        aria-label={fullscreen ? "Minimize game" : "Maximize game"}
        className="
          absolute top-3 right-3 z-[10000]
          rounded-full p-2
          bg-black/70 text-white
          hover:bg-black/90
          transition
          backdrop-blur-md
          cursor-pointer
        "
      >
        {fullscreen ? <FiMinimize size={20} /> : <FiMaximize size={20} />}
      </button>

      {/* Iframe */}
      <iframe
        ref={iframeRef}
        src={url}
        title={name}
        allowFullScreen
        className={`border-none transition-all duration-300 ${
          fullscreen
            ? "fixed inset-0 z-[9999] w-full h-screen rounded-none"
            : `
              w-full h-screen
              md:w-full md:h-auto md:aspect-[16/9] md:min-h-[320px]
              rounded-xl
            `
        }`}
        style={{ background: "#000" }}
      />
    </div>
  );
};

export default PlayGameClient;
