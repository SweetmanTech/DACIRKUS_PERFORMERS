import { initializeApp } from "firebase/app"
import { getFirestore, query, orderBy, limit, collection, getDocs } from "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "relief-game.firebaseapp.com",
  projectId: "relief-game",
  storageBucket: "relief-game.appspot.com",
  messagingSenderId: "533966397288",
  appId: "1:533966397288:web:911f9f0d539025183100dd",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
export const firebaseFirestore = getFirestore(app)

export const getLeaderboard = async () => {
  const citiesRef = collection(firebaseFirestore, "userdata")
  const q = query(citiesRef, orderBy("score", "desc"), limit(3))
  const querySnapshot = await getDocs(q)
  const scores = []
  querySnapshot.forEach((doc) => {
    scores.push(doc.data())
  })
  return scores
}
