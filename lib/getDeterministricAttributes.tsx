import hashJs from "hash.js"
import { CACCS, CCOLORS, CEYES, CHAIRS, COUTFITS, CSKINS, CTYPES, CBGCOLORS } from "./character"

const maxTokenID = 10000

const generateSequence = (length: number) => Array.from({ length }, (_, index) => index + 1)

const deterministicShuffle = (array: Array<number>, seed: string) => {
  /* eslint-disable no-plusplus */
  for (let i = 1; i <= array.length - 1; i++) {
    const hash = hashJs
      .sha256()
      .update(seed + String(i))
      .digest("hex")
    const randomIndex = parseInt(hash, 16) % (i + 1)
    /* eslint-disable no-param-reassign */
    ;[array[i], array[randomIndex]] = [array[randomIndex], array[i]]
  }
  return array
}

const shuffledList = deterministicShuffle(generateSequence(maxTokenID + 8), "DaPerformers")

const getDeterministricAttributes = (tokenId: number) => {
  if (tokenId < 1 || tokenId > maxTokenID) {
    throw new Error("TokenId must be between 1 and 10000 inclusive.")
  }
  const index = (tokenId - 1) * 2
  const type = shuffledList[index] % CTYPES.length
  const skin = shuffledList[index + 1] % CSKINS.length
  const acc = shuffledList[index + 2] % CACCS.length
  const eye = shuffledList[index + 3] % CEYES.length
  const hair = shuffledList[index + 4] % CHAIRS.length
  const color = shuffledList[index + 5] % CCOLORS.length
  const outfit = shuffledList[index + 6] % COUTFITS.length
  const bg = shuffledList[index + 7] % CBGCOLORS.length

  return [type, skin, acc, eye, hair, color, outfit, bg]
}

export default getDeterministricAttributes
