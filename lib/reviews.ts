import { db } from "./firebase_config";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  query,
  orderBy,
  Timestamp,
  getCountFromServer,
} from "firebase/firestore";

export interface Review {
  id?: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: Timestamp;
}

// Add a review for a game
export const addReview = async (
  gameId: string,
  review: Omit<Review, "id" | "createdAt">,
): Promise<string> => {
  try {
    const reviewsRef = collection(db, "reviews", gameId, "userReviews");
    const docRef = await addDoc(reviewsRef, {
      ...review,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

// Get all reviews for a game
export const getReviews = async (gameId: string): Promise<Review[]> => {
  try {
    const reviewsRef = collection(db, "reviews", gameId, "userReviews");
    const q = query(reviewsRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    const reviews: Review[] = [];
    querySnapshot.forEach((doc) => {
      reviews.push({
        id: doc.id,
        ...doc.data(),
      } as Review);
    });

    return reviews;
  } catch (error) {
    console.error("Error getting reviews:", error);
    return [];
  }
};

// Get the total number of reviews (rating count)
export const getReviewCount = async (gameId: string): Promise<number> => {
  try {
    const reviewsRef = collection(db, "reviews", gameId, "userReviews");
    const snapshot = await getCountFromServer(reviewsRef);
    return snapshot.data().count;
  } catch (error) {
    console.error("Error getting review count:", error);
    return 0;
  }
};

// Get average rating for a game
export const getAverageRating = async (gameId: string): Promise<number> => {
  try {
    const reviews = await getReviews(gameId);
    if (reviews.length === 0) return 0;

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return Math.round((totalRating / reviews.length) * 10) / 10;
  } catch (error) {
    console.error("Error calculating average rating:", error);
    return 0;
  }
};
