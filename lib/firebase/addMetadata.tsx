import { doc, setDoc } from "firebase/firestore"
import { firestore } from "./firebase"

const addMetadata = async (tokenId, attributes, image) => {
    try {
        await setDoc(doc(firestore, "characters", tokenId), {
            attributes,
            image
        })
    } catch(error) {
        return {error}
    }
}

export default addMetadata