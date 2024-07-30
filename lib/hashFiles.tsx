import * as crypto from "crypto"

const hashFiles = (files: File[]): string => {
  const hash = crypto.createHash("sha256")
  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const simplifiedFile = {
      name: file.name,
      lastModified: file.lastModified,
      size: file.size,
      type: file.type,
    }
    hash.update(JSON.stringify(simplifiedFile))
  }
  return `0x${hash.digest("hex")}`
}

export default hashFiles
