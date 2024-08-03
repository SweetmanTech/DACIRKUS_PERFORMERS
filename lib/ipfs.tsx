export const uploadToIpfs = async (content) => {
  try {
    const data = new FormData()
    data.set("file", content)
    const res = await fetch("/api/ipfs", {
      method: "POST",
      body: data,
    })
    const json = await res.json()
    const { cid } = json
    return cid
  } catch (error) {
    return null
  }
}
