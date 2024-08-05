"use client"

import * as React from "react"
import { type PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth"
import { ThemeProvider } from "./ThemeProvider"
import { ToastContainer } from "react-toastify"
import UserProvider from "./UserProvider"

const privyConfig: PrivyClientConfig = {
  loginMethods: ["email"],
  appearance: {
    theme: "dark",
    accentColor: "#FFFFFF",
    logo: "/images/FInalCRT.png",
  },
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
  },
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as any} config={privyConfig}>
      <UserProvider>
        <ThemeProvider>
          {children}
          <ToastContainer />
        </ThemeProvider>
      </UserProvider>
    </PrivyProvider>
  )
}
