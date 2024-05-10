import { doc, setDoc } from "firebase/firestore"
import { firestore } from "./firebase"
import { CHAIN_ID } from "../consts"

const addMetadata = async (tokenId, attributes, sheet, pfp = "") => {
  try {
    await setDoc(
      doc(firestore, "characters", `${tokenId}`),
      {
        [`${CHAIN_ID}`]: {
          attributes,
          sheet,
          pfp,
        },
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
