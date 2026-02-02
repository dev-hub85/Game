"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiMaximize, FiX } from "react-icons/fi";

interface PlayGameClientProps {
  url: string;
  name: string;
  width?: number;
  height?: number;
}

const PlayGameClient: React.FC<PlayGameClientProps> = ({
  url,
  name,
  width = 800,
  height = 480,
}) => {
  const [loading, setLoading] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Handle iframe load
  const handleLoad = () => {
    setLoading(false);
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  // Lock scrolling on mobile when fullscreen
  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [fullscreen]);

  return (
    <div className="relative w-full">

      {/* Iframe */}
      <iframe
        ref={iframeRef}
        src={url}
        title={name}
        onLoad={handleLoad}
        allowFullScreen
        className={`rounded-xl border-none transition-all duration-300 ${
          fullscreen
            ? "fixed inset-0 z-[9999] w-screen h-screen"
            : "w-full aspect-[16/9] min-h-[320px]"
        }`}
        style={{ background: "#000" }}
      />
    </div>
  );
};

export default PlayGameClient;
