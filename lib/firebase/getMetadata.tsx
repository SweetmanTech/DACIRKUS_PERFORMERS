import { doc, getDoc } from "firebase/firestore"
import { firestore } from "./firebase"

const getMetadata = async (tokenId) => {
  try {
    const docRef = await getDoc(doc(firestore, "characters", `${tokenId}`))

    return {
      id: docRef.id,
      ...docRef.data(),
    }
  } catch (error) {
    return { error }
  }
}

export default getMetadata
