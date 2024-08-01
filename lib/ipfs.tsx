export const uploadToIpfs = async (content) => {
  const data = new FormData()
  data.append("file", content)
  data.append("pinataMetadata", JSON.stringify({ name: "File to upload" }))
  const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
    },
    body: data,
  })

  const { IpfsHash } = await response.json()
  return IpfsHash
}
