import { doc, setDoc } from "firebase/firestore"
import { firestore } from "./firebase"

const addMetadata = async (tokenId, attributes) => {
  try {
    await setDoc(
      doc(firestore, "characters", `${tokenId}`),
      {
        attributes,
      },
      {
        merge: true,
      },
    )
    return true
  } catch (error) {
    return { error }
  }
}

export default addMetadata
