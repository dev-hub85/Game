import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth, db } from "./firebase_config";
import { setDoc, doc, getDoc, Timestamp } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";

// Set persistence to local
setPersistence(auth, browserLocalPersistence);

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Sign up with email and password
export const signUp = async (
  email: string,
  password: string,
  displayName: string,
): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // Save user profile to Firestore
    await saveUserProfile({
      uid: user.uid,
      email: user.email || email,
      displayName: displayName,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });

    return user;
  } catch (error) {
    throw error;
  }
};

// Sign in with email and password
export const signIn = async (
  email: string,
  password: string,
): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Sign in with Google
export const signInWithGoogle = async (): Promise<User> => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    // Check if user profile exists, if not create one
    const userDocRef = doc(db, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      await saveUserProfile({
        uid: user.uid,
        email: user.email || "",
        displayName: user.displayName || "Google User",
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
    }

    return user;
  } catch (error) {
    throw error;
  }
};

// Save user profile to Firestore
export const saveUserProfile = async (userProfile: UserProfile) => {
  try {
    const userDocRef = doc(db, "users", userProfile.uid);
    await setDoc(userDocRef, userProfile, { merge: true });
  } catch (error) {
    throw error;
  }
};

// Get user profile from Firestore
export const getUserProfile = async (
  uid: string,
): Promise<UserProfile | null> => {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      return userDocSnap.data() as UserProfile;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

// Sign out
export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Get current user
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

// Added a function for password reset
export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};
