import "@/styles/globals.css"
import "react-toastify/dist/ReactToastify.css"

import * as React from "react"
import Providers from "@/providers"
import { Metadata } from "next"
import { ARTIST, TITLE } from "@/lib/consts"

export const metadata: Metadata = {
  title: TITLE,
  description: `${TITLE} by ${ARTIST}`,
  icons: [{ url: "/images/FInalCRT.png" }],
  keywords: [],
  openGraph: {
    type: "website",
    url: "https://daperformers.com",
    title: TITLE,
    description: `${TITLE} by ${ARTIST}`,
    siteName: "@dacirkus",
    images: [{ url: "/images/FInalCRT.png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
