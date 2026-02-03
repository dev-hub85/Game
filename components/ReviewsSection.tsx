"use client";

import React, { useEffect, useState } from "react";
import { FiStar, FiEdit3 } from "react-icons/fi";
import { getReviews, getAverageRating, Review } from "@/lib/reviews";
import { useUser } from "@/context/UserContext";
import ReviewModal from "./ReviewModal";
import AuthModal from "./AuthModal";

interface ReviewsSectionProps {
  gameId: string;
  gameName: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  gameId,
  gameName,
}) => {
  const { isLoggedIn } = useUser();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const [fetchedReviews, avgRating] = await Promise.all([
        getReviews(gameId),
        getAverageRating(gameId),
      ]);
      setReviews(fetchedReviews);
      setAverageRating(avgRating);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [gameId]);

  const handleWriteReview = () => {
    if (isLoggedIn) {
      setReviewModalOpen(true);
    } else {
      setAuthModalOpen(true);
    }
  };

  const handleReviewSubmitted = () => {
    fetchReviews();
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            size={16}
            className={`${
              star <= rating
                ? "fill-[#FFD600] text-[#FFD600]"
                : "text-[#b6c6e3]/50"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="bg-[#010419] px-2 md:px-4 py-4">
        {/* Header */}
        <div className="flex flex-row md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="w-full">
            <div className="flex flex-row justify-between gap-4 w-full">
              <h2 className="font-oxanium font-extrabold text-2xl flex items-center gap-2 mb-1">
                Player Reviews
              </h2>
              <button
                onClick={handleWriteReview}
                className="flex items-center justify-center gap-2 px-2 py-2 rounded-lg font-oxanium font-bold text-white bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] hover:brightness-110 transition-all duration-300"
              >
                <FiEdit3 size={18} />
                Review
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {renderStars(Math.round(averageRating))}
                <span className="text-[#FFD600] font-bold">
                  {averageRating}
                </span>
              </div>
              <span className="text-[#b6c6e3] text-sm">
                ({reviews.length} {reviews.length === 1 ? "review" : "reviews"})
              </span>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <div className="w-8 h-8 relative">
              <span className="absolute inset-0 rounded-full border-3 border-[#FF3D8E]/30"></span>
              <span className="absolute inset-0 rounded-full border-3 border-transparent border-t-[#FF3D8E] animate-spin"></span>
            </div>
            <span className="ml-3 text-[#b6c6e3]">Loading reviews...</span>
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-[#b6c6e3] text-lg mb-2">No reviews yet</p>
            <p className="text-[#b6c6e3]/70 text-sm">
              Be the first to share your experience with this game!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-[#14243a]/50 rounded-xl p-4 border border-[#0ff0fc33]"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#BB0051] to-[#FF3D8E] flex items-center justify-center text-white font-bold">
                      {review.userName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        {review.userName}
                      </p>
                      <p className="text-[#b6c6e3]/70 text-xs">
                        {formatDate(review.createdAt)}
                      </p>
                    </div>
                  </div>
                  {renderStars(review.rating)}
                </div>
                <p className="text-[#b6c6e3] text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Review Modal */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        gameId={gameId}
        gameName={gameName}
        onReviewSubmitted={handleReviewSubmitted}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
};

export default ReviewsSection;
