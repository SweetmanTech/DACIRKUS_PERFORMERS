import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app"
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit"
import { allChains, configureChains, createClient, WagmiConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import * as React from "react"
import { UserProvider } from "../providers/UserProvider"
import { ChatProvider } from "../providers/ChatProvider"
import { ThemeProvider } from "../providers/ThemeProvider"

const { chains, provider, webSocketProvider } = configureChains(allChains, [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: "CRE8ORS",
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider modalSize="compact" chains={chains}>
        <ThemeProvider>
          <SessionProvider>
            <UserProvider>
              <ChatProvider>
                <Component {...pageProps} />
                <ToastContainer />
              </ChatProvider>
            </UserProvider>
          </SessionProvider>
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default MyApp
