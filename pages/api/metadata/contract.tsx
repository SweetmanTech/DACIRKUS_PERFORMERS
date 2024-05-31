export default async function handler(req: any, res: any) {
  const metaData = {
    name: "Da Performers",
    logo: "ipfs://QmQEannRtCaPQTK87z7ABiiFSxYP1DjyqLePQLknKX6PuX/Daperformers.png",
    description:
      "Create your character, plan your performance, and join Da Cirkus! www.DaPerformers.com",
    external_link: "https://www.daperformers.com",
  }

  return res.status(200).json(metaData)
}
