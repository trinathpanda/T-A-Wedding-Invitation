import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDkrpMrQjHt1BAKzHTJyi82E4C-I8OMso",
    authDomain: "ta-wedding-invite.firebaseapp.com",
    projectId: "ta-wedding-invite",
    storageBucket: "ta-wedding-invite.firebasestorage.app",
    messagingSenderId: "340890853425",
    appId: "1:340890853425:web:3e86ff021283c8298f3510",
    measurementId: "G-N3SD1FDCVY"
};

// Initialize Firebase (prevent multiple initializations)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

// Submit RSVP to Firestore
export async function submitRSVP(data) {
    try {
        const docRef = await addDoc(collection(db, "rsvps"), {
            ...data,
            createdAt: serverTimestamp(),
        });
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error submitting RSVP:", error);
        return { success: false, error: error.message };
    }
}

export { db };
