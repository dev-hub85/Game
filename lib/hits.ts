import { db } from "./firebase_config";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";

export interface GameHits {
  hits: number;
  lastUpdated: Date;
}

// Increment hits for a game and return the new count
export const incrementHits = async (gameId: string): Promise<number> => {
  try {
    const hitsRef = doc(db, "hits", gameId);
    const hitsDoc = await getDoc(hitsRef);

    if (hitsDoc.exists()) {
      // Document exists, increment the hits
      await setDoc(
        hitsRef,
        {
          hits: increment(1),
          lastUpdated: new Date(),
        },
        { merge: true },
      );
      // Return the new count (current + 1)
      return (hitsDoc.data().hits || 0) + 1;
    } else {
      // Document doesn't exist, create it with hits = 1
      await setDoc(hitsRef, {
        hits: 1,
        lastUpdated: new Date(),
      });
      return 1;
    }
  } catch (error) {
    console.error("Error incrementing hits:", error);
    return 0;
  }
};

// Get hits for a game without incrementing
export const getHits = async (gameId: string): Promise<number> => {
  try {
    const hitsRef = doc(db, "hits", gameId);
    const hitsDoc = await getDoc(hitsRef);

    if (hitsDoc.exists()) {
      return hitsDoc.data().hits || 0;
    }
    return 0;
  } catch (error) {
    console.error("Error getting hits:", error);
    return 0;
  }
};
