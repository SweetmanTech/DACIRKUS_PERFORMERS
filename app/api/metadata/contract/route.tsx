import { NextResponse } from "next/server"

async function getMetadata(): Promise<NextResponse> {
  const metaData = {
    name: "Da Performers",
    logo: "ipfs://QmQEannRtCaPQTK87z7ABiiFSxYP1DjyqLePQLknKX6PuX/Daperformers.png",
    description:
      "Create your character, plan your performance, and join Da Cirkus! www.DaPerformers.com",
    external_link: "https://www.daperformers.com",
  }

  return new NextResponse(JSON.stringify(metaData), {
    headers: {
      "content-type": "application/json",
    },
  })
}

export async function GET(): Promise<NextResponse> {
  return getMetadata()
}
