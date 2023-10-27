import { ConnectButton } from "@rainbow-me/rainbowkit"
import Button from "../Button"

const WalletPowerUpButton = () => (
  <ConnectButton.Custom>
    {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
      const connected = mounted && account && chain
      return (
        <div
          {...(!mounted && {
            "aria-hidden": true,
            style: {
              opacity: 0,
              pointerEvents: "none",
              userSelect: "none",
            },
          })}
        >
          {(() => {
            if (!connected) {
              return (
                <Button onClick={openConnectModal} type="button">
                  Connect Wallet
                </Button>
              )
            }
            if (chain.unsupported) {
              return (
                <Button onClick={openChainModal} type="button">
                  Wrong network
                </Button>
              )
            }
            return (
              <div style={{ display: "flex", gap: 12 }}>
                <Button onClick={openAccountModal} type="button" className="flex items-center">
                  <span className="pt-2">✅ </span>connected: {account.displayName}
                </Button>
              </div>
            )
          })()}
        </div>
      )
    }}
  </ConnectButton.Custom>
)

export default WalletPowerUpButton
