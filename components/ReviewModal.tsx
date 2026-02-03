"use client";

import React, { useState } from "react";
import { FiX, FiStar } from "react-icons/fi";
import { addReview } from "@/lib/reviews";
import { useUser } from "@/context/UserContext";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameId: string;
  gameName: string;
  onReviewSubmitted: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  gameId,
  gameName,
  onReviewSubmitted,
}) => {
  const { user, userProfile } = useUser();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (rating === 0) {
      setError("Please select a rating");
      return;
    }

    if (!comment.trim()) {
      setError("Please write a review");
      return;
    }

    if (!user) {
      setError("You must be logged in to submit a review");
      return;
    }

    setLoading(true);

    try {
      await addReview(gameId, {
        userId: user.uid,
        userName: userProfile?.displayName || user.email?.split("@")[0] || "Anonymous",
        rating,
        comment: comment.trim(),
      });
      
      setRating(0);
      setComment("");
      onReviewSubmitted();
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to submit review");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setRating(0);
    setComment("");
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg mx-4 max-h-[80vh] overflow-y-auto bg-gradient-to-br from-[#14243a] to-[#1a2f4a] rounded-2xl border border-[#0ff0fc33] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#b6c6e3] hover:text-white transition-colors"
        >
          <FiX size={24} />
        </button>

        <div className="px-3 md:px-6 py-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold font-oxanium text-white mb-2">
              Write a Review
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] mx-auto mb-3"></div>
            <p className="text-[#b6c6e3] text-sm">
              Share your experience playing{" "}
              <span className="text-white font-semibold">{gameName}</span>
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-2">
            {/* Star Rating */}
            <div>
              <label className="block text-white font-oxanium mb-3">
                Your Rating
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <FiStar
                      size={32}
                      className={`transition-colors ${
                        star <= (hoverRating || rating)
                          ? "fill-[#FFD600] text-[#FFD600]"
                          : "text-[#b6c6e3]"
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-3 text-[#b6c6e3] text-sm">
                  {rating > 0 ? `${rating} out of 5` : "Select rating"}
                </span>
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-white font-oxanium mb-2">
                Your Review
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell others what you think about this game..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#010419] text-white placeholder:text-[#b6c6e3]/50 border border-[#0ff0fc33] focus:border-[#FF3D8E] focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 rounded-lg font-oxanium font-bold text-white bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] hover:brightness-110 disabled:brightness-75 transition-all duration-300"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
