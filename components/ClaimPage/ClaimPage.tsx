import { useMeasure } from "react-use"
import { useRef } from "react"
import { useMediaQuery, useReadLocalStorage } from "usehooks-ts"
import { useSigner } from "wagmi"
import Layout from "../Layout"
import SectionTitle from "../LandingPage/SectionTitle"
import SectionContent from "../LandingPage/SectionContent"
import { Button } from "../../shared/Button"
import Media from "../../shared/Media"
import Footer from "../Footer"
import { useTheme } from "../../providers/ThemeProvider"
import useGradualFadeEffect from "../../hooks/useGradualFade"
import Popover from "../../shared/Popover"
import ConnectWallet from "./ConnetWallet"
import Redeem from "./Redeem"

const ClaimPage = () => {
  const [containerRef, { width }] = useMeasure()
  const { data: signer } = useSigner()

  const isResponsive = useMediaQuery("(max-width: 1429px)")
  const isScrollUp = useReadLocalStorage<boolean>("isScrollUp")

  const { themeMode } = useTheme()

  const titleRef = useRef()
  const contentRef = useRef()
  const buttonRef = useRef()

  useGradualFadeEffect({
    elements: [
      {
        domObject: contentRef.current,
        type: "child",
      },
      {
        domObject: titleRef.current,
        type: "child",
      },
      {
        domObject: buttonRef.current,
        type: "child",
      },
    ],
    isScrollUp,
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
              height: isResponsive ? `100vh` : `${(1048 / 1579) * width}px`,
              backgroundImage:
                themeMode === "light"
                  ? "url('/assets/Claim/white_background.svg')"
                  : "url('/assets/Claim/background.svg')",
              backgroundSize: isResponsive
                ? `cover`
                : `${width * 1.04}px ${(1048 / 1579) * width * 1.04}px`,
              backgroundPosition: isResponsive
                ? `center center`
                : `bottom 0px right -${themeMode === "light" ? 0 : width * 0.04}px`,
            }}
          >
            <div className="max-w-[1280px] flex-grow flex flex-col justify-end md:flex-row items-center">
              <div className="flex justify-center md:hidden">
                {width && (
                  <Media
                    type="image"
                    link="/assets/Claim/ticket.svg"
                    containerClasses="rounded-[10px] overflow-hidden z-[1]"
                    containerStyle={{
                      width: isResponsive ? `${(width / 430) * 264}px` : "458px",
                      height: isResponsive ? `${(width / 430) * 300}px` : "521px",
                    }}
                  />
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col justify-center">
                  <div ref={titleRef}>
                    <SectionTitle
                      text="Exchange Ticket, Redeem Passport"
                      className="mx-[8px] xs:m-6 w-[290px] samsungS8:w-[330px] !text-[30px] samsungS8:!text-[33px] lg:!text-[64px] lg:w-[550px] md:text-left mb-4"
                    />
                  </div>
                  <div className="flex justify-center" ref={contentRef}>
                    <SectionContent className="w-[290px] samsungS8:w-[300px] md:w-[550px] m-[8px] mt-[30px] xs:mt-[40px] md:mt-12 md:text-left">
                      <div className="pl-0 xs:pl-4">
                        1. Connect wallet
                        <br />
                        2. Exchange ticket
                        <br />
                        3. Get Passport
                        <br />
                      </div>
                    </SectionContent>
                  </div>
                  <div className="px-12 flex justify-center md:justify-start">
                    <Popover className="w-full" id="connect_popver_claim">
                      <div ref={buttonRef}>
                        <Button id="redeem_passport_btn" className="mt-[40px] md:mt-0 lg:px-[70px]">
                          Redeem Passport
                        </Button>
                      </div>
                      {({ toggleModal }) => (
                        <div>
                          {signer ? (
                            <Redeem handleClose={toggleModal} />
                          ) : (
                            <ConnectWallet handleClose={toggleModal} />
                          )}
                        </div>
                      )}
                    </Popover>
                  </div>
                </div>
                <div className="justify-center md:flex hidden">
                  {width && (
                    <Media
                      type="image"
                      link="/assets/Claim/ticket.svg"
                      containerClasses="rounded-[10px] overflow-hidden z-[1]"
                      containerStyle={{
                        width: isResponsive ? `${(width / 1440) * 458}px` : "458px",
                        height: isResponsive ? `${(width / 1440) * 521}px` : "521px",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <Footer className="mt-0 pt-6 !bg-transparent" />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default ClaimPage
