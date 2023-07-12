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
import Media from "../../shared/Media"

const MintPage = () => {
  const [containerRef, { height, width }] = useMeasure()
  const isResponsive = useMediaQuery("(max-width: 1020px)")
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
      <div className="relative overflow-x-hidden z-[1] w-[100vw]" ref={containerRef}>
        {height && (
          <div
            className="relative z-[6] flex flex-col items-center pt-[80px] overflow-y-auto h-[100vh]  overflow-x-hidden"
            style={{
              height: isMobile ? `${(width / 432) * 980}px` : "100vh",
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
                  : `bottom left`
                : `bottom left`,
            }}
          >
            <div className="fixed left-0 bottom-0 z-[3] hidden dark:md:block">
              <Media
                link="/assets/Mint/character.svg"
                type="image"
                containerStyle={{
                  height: `${(height / 1020) * 754}px`,
                  width: `${(height / 1020) * 396}px`,
                }}
              />
            </div>
            <div
              className="max-w-[1280px]
              relative z-[100]
              flex flex-col items-center justify-end
              md:block
              h-full
              "
            >
              <div
                className="md:h-[calc(100vh-80px)] flex items-center justify-center
                pb-[200px] samsungS8:pb-[270px] xs:pb-[320px] md:pb-0 
                "
              >
                <div
                  className="dark:bg-[#00000069] rounded-[20px] 
                  xl:pt-[40px] xl:pb-[20px] xl:px-[40px]
                  px-[20px] py-[30px]
                  dark:border-[1px] dark:border-[black]
                  flex flex-col items-center
                  gap-[20px] md:gap-[30px]"
                >
                  <Title
                    text="Mint Your Cre8ors"
                    className="!text-[28px] xs:!text-[35px] md:!text-[50px] xl:!text-[65px]"
                  />
                  <div ref={passportRef}>
                    <Button
                      id="passports_btn_mint"
                      className="w-[250px] xs:w-[280px] md:w-[470px] xl:w-[592px]"
                    >
                      Passports
                    </Button>
                  </div>
                  <div ref={allowlistRef}>
                    <Button
                      id="allowlist_btn_mint"
                      className="w-[250px] xs:w-[280px] md:w-[470px] xl:w-[592px]"
                    >
                      Allowlist
                    </Button>
                  </div>
                  <div ref={publicRef}>
                    <Button
                      id="public_btn_mint"
                      className="w-[250px] xs:w-[280px] md:w-[470px] xl:w-[592px]"
                    >
                      Public
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <Content
                      content="Passports: July 27th @ 8am EST • Allowlist: July 28th @ 8am EST • Public Sale : July 29th 8am EST"
                      className="!text-[13px]"
                    />
                  </div>
                </div>
              </div>
              <Footer className="!pt-0 !pb-0 !bg-transparent relative z-[10]" />
            </div>
          </div>
        )}
      </div>
      <div className="bottom-[100px] right-[20px] md:right-[30px] md:bottom-[30px] absolute z-[2]">
        <Media
          type="image"
          link="/assets/Mint/help.png"
          containerClasses="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
        />
      </div>
    </Layout>
  )
}

export default MintPage
