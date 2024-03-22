import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import * as React from "react"
import { Analytics } from "@vercel/analytics/react"
import { type PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth"
import { ThemeProvider } from "../providers/ThemeProvider"
import UserProvider from "@/providers/UserProvider"

const privyConfig: PrivyClientConfig = {
  loginMethods: ["email", "wallet"],
  appearance: {
    theme: "dark",
    accentColor: "#FFFFFF",
    logo: "/images/logo.jpg",
  },
  embeddedWallets: {
    createOnLogin: "all-users",
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID} config={privyConfig}>
      <UserProvider>
        <ThemeProvider>
          <SessionProvider>
            <Component {...pageProps} />
            <ToastContainer />
            <Analytics />
          </SessionProvider>
        </ThemeProvider>
      </UserProvider>
    </PrivyProvider>
  )
}
export default MyApp
