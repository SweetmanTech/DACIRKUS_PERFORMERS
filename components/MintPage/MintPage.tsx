import { useMeasure } from "react-use"
import { useMediaQuery } from "usehooks-ts"
import { useRef } from "react"
import { useAccount } from "wagmi"
import Layout from "../Layout"
import Footer from "../Footer"
import { useTheme } from "../../providers/ThemeProvider"
import Title from "../Common/Title"
import { Button } from "../../shared/Button"
import Content from "../Common/Content"
import useShakeEffect from "../../hooks/useShakeEffect"

const MintPage = () => {
  const [containerRef, { width }] = useMeasure()
  const isResponsive = useMediaQuery("(max-width: 1440px)")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { themeMode } = useTheme()

  const { address: account } = useAccount()
  const passportRef = useRef()
  const allowlistRef = useRef()
  const publicRef = useRef()

  useShakeEffect({
    ref: passportRef,
    isEnabled: !account,
  })

  useShakeEffect({
    ref: allowlistRef,
    isEnabled: !account,
  })

  useShakeEffect({
    ref: publicRef,
    isEnabled: !account,
  })

  return (
    <Layout type="base">
      <div
        className="relative overflow-y-auto min-h-[100vh] overflow-x-hidden z-[1] w-[100vw]"
        ref={containerRef}
      >
        {width && (
          <div
            className="relative z-[6] flex flex-col items-center pt-[80px]"
            style={{
              width: `${width}px`,
              height: isResponsive ? `900px` : `${(1020 / 1440) * width}px`,
              minHeight: isResponsive ? "100vh" : "",
              backgroundImage:
                // eslint-disable-next-line no-nested-ternary
                themeMode === "light"
                  ? "url('/assets/Claim/white_background.svg')"
                  : isMobile
                  ? "url('/assets/Mint/mobile_background.svg')"
                  : "url('/assets/Mint/background.png')",
              backgroundSize: isResponsive ? "cover" : "cover",
              // eslint-disable-next-line no-nested-ternary
              backgroundPosition: isResponsive
                ? isMobile
                  ? `bottom center`
                  : `bottom right`
                : `center`,
            }}
          >
            <div
              className="max-w-[1280px] flex-grow flex flex-col justify-end md:flex-row items-center 
            pb-[250px] samsungS8:pb-[270px] xs:pb-[290px] md:pb-0 relative z-[100]"
            >
              <div
                className="dark:bg-[#00000069] rounded-[20px] 
              pt-[40px] pb-[20px] px-[40px] 
              dark:border-[1px] dark:border-[black]
              flex flex-col items-center gap-[30px]
             "
              >
                <Title text="Mint Your Cre8ors" />
                <div ref={passportRef}>
                  <Button id="passports_btn_mint" className="w-[592px]">
                    Passports
                  </Button>
                </div>
                <div ref={allowlistRef}>
                  <Button id="allowlist_btn_mint" className="w-[592px]">
                    Allowlist
                  </Button>
                </div>
                <div ref={publicRef}>
                  <Button id="public_btn_mint" className="w-[592px]">
                    Public
                  </Button>
                </div>
                <Content
                  content="Passports: July 27th @ 8am EST • Allowlist: July 28th @ 8am EST • Public Sale : July 29th 8am EST"
                  className="!text-[13px]"
                />
              </div>
            </div>
            <Footer className="!pt-0 !pb-0 !bg-transparent relative z-[10]" />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default MintPage
