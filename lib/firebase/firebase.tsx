import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

if (typeof global.navigator === "undefined") global.navigator = {} as any

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "daperformers-9ae66.firebaseapp.com",
  projectId: "daperformers-9ae66",
  storageBucket: "daperformers-9ae66.appspot.com",
  messagingSenderId: "871754136828",
  appId: "1:871754136828:web:2b708fe6d6790eb050eb79",
  measurementId: "G-Q9XVK5E27N",
}

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
