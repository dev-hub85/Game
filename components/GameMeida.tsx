"use client";

import { Game } from "@/type/game";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

interface GameMediaGalleryProps {
  game: Game;
}

const GameMediaGallery: React.FC<GameMediaGalleryProps> = ({ game }) => {
  // Prepare images
  const firstImageSrc =
    game.thumb8 ||
    game.thumb7 ||
    game.thumb6 ||
    game.thumb5 ||
    game.thumb4 ||
    game.thumb3 ||
    game.thumb2 ||
    game.thumb1 ||
    game.image;

  const images: { type: "image"; src: string }[] = firstImageSrc
    ? [{ type: "image", src: firstImageSrc }]
    : [];

  // Prepare videos
  const videos: { type: "video"; src: string; isYoutube: boolean }[] = [];
  if (game.video?.mp4)
    videos.push({ type: "video", src: game.video.mp4, isYoutube: false });
  if (game.youtube)
    videos.push({ type: "video", src: game.youtube, isYoutube: true });

  // Merge media
  const media = [...images, ...videos];

  // State
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [modalMedia, setModalMedia] = useState<number | null>(null);

  const videoThumbnail = game.thumb8 || game.image;

  const closeModal = () => setModalMedia(null);

  return (
    <div className="my-5 py-5 bg-[#010419] px-2 md:px-2 lg:px-4">
      <div className="flex flex-col md:flex-row items-start mb-2 gap-4 ">
        <div>
          <h2 className="text-white font-oxanium font-extrabold text-2xl flex items-center gap-2 mb-0">
            Game Media Gallery
          </h2>
          <p className="text-[#b6c6e3] text-sm mb-6">
            Screenshots and videos from {game.name}
          </p>
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {media.map((m, i) => (
          <div
            key={i}
            className="relative group w-full aspect-video rounded-lg overflow-hidden bg-black cursor-pointer"
            onMouseEnter={() =>
              m.type === "video" && !m.isYoutube && setHoveredVideo(i)
            }
            onMouseLeave={() =>
              m.type === "video" && !m.isYoutube && setHoveredVideo(null)
            }
            onClick={() => setModalMedia(i)}
          >
            {m.type === "image" && (
              <Image
                src={m.src}
                alt={`game-${i}`}
                fill
                className="object-cover hover:brightness-110 transition-all"
              />
            )}

            {m.type === "video" && hoveredVideo === i && !m.isYoutube && (
              <video
                src={m.src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            )}

            {m.type === "video" && hoveredVideo === i && m.isYoutube && (
              <iframe
                src={`https://www.youtube.com/embed/${m.src.split("v=")[1]}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                className="w-full h-full"
                allow="autoplay"
                frameBorder="0"
              />
            )}

            {/* Overlay thumbnail with play icon for videos */}
            {!(hoveredVideo === i && m.type === "video") && (
              <div className="relative w-full h-full">
                {m.type === "video" && (
                  <>
                    <Image
                      src={videoThumbnail || ""}
                      alt="video thumbnail"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <FaPlay className="text-white text-3xl opacity-80 group-hover:scale-110 transition-transform" />
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalMedia !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 z-50 text-white text-2xl hover:text-red-500"
              onClick={closeModal}
            >
              <FaTimes />
            </button>

            {/* Image */}
            {media[modalMedia].type === "image" && (
              <Image
                src={media[modalMedia].src}
                alt={`media-${modalMedia}`}
                fill
                className="object-contain rounded-lg"
              />
            )}

            {/* MP4 Video */}
            {media[modalMedia].type === "video" &&
              !media[modalMedia].isYoutube && (
                <video
                  src={media[modalMedia].src}
                  autoPlay
                  controls
                  className="w-full h-full object-cover rounded-lg"
                />
              )}

            {/* YouTube Video */}
            {media[modalMedia].type === "video" &&
              media[modalMedia].isYoutube && (
                <iframe
                  src={`https://www.youtube.com/embed/${media[modalMedia].src.split("v=")[1]}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                  className="w-full h-full rounded-lg"
                  allow="autoplay"
                  frameBorder="0"
                />
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameMediaGallery;
