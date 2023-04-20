import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { signOut } from "next-auth/react"
import { useMediaQuery } from "usehooks-ts"
import customLoader from "../../lib/customLoader"
import { Button } from "../../shared/Button"

interface HeaderProps {
  connect?: boolean
  logout?: boolean
}
const Header: FC<HeaderProps> = ({ connect, logout }) => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <nav className="fixed top-0 z-50 flex flex-row items-center justify-between w-screen p-2 text-black bg-white font-objektivmk1_bold">
      <span className="relative items-center flex-shrink-0 w-20 mr-6 cursor-auto lg:md:mt-6 lg:mt-0 lg:md:w-36 lg:flex">
        <Link href="/">
          <Image
            src="/CRE8ORSLOGO_ICON.png"
            alt="cre8ors logo"
            width={25}
            height={34}
            className="cursor-pointer"
            loader={customLoader}
          />
        </Link>
      </span>

      <div className="flex-row items-center text-sm rounded lg:items-right lg:w-auto lg:md:text-sm font-objektivmk1_bold ">
        <Link href="/">
          <div className="inline-block pl-2 mt-4 cursor-pointer text-md hover:border-transparent lg:mt-0 lg:md:px-4">
            {isMobile ? (
              <Image
                src="/Icons/twitter.png"
                alt="twitter"
                width={30}
                height={30}
                loader={customLoader}
              />
            ) : (
              <>Twitter</>
            )}
          </div>
        </Link>
        <Link href="/">
          <div className="inline-block pl-2 mt-4 cursor-pointer text-md hover:border-transparent lg:mt-0 lg:md:px-4">
            {isMobile ? (
              <Image
                src="/Icons/discord.png"
                alt="discord"
                width={30}
                height={30}
                loader={customLoader}
              />
            ) : (
              <>Discord</>
            )}
          </div>
        </Link>
        <Link href="https://cre8ors.beehiiv.com/?_gl=1*16y8c82*_ga*NzQ0MjY2NzkyLjE2NzI4NzY1OTY.*_ga_E6Y4WLQ2EC*MTY4MTQ5NTA5Ny4zNS4xLjE2ODE0OTUxMDAuNTcuMC4w">
          <div className="inline-block py-2 pl-2 mt-4 cursor-pointer hover:border-transparent lg:mt-0 lg:md:px-4">
            {isMobile ? (
              <Image
                src="/Icons/newsletter.png"
                alt="newsletter"
                width={30}
                height={30}
                loader={customLoader}
              />
            ) : (
              <>Newsletter</>
            )}
          </div>
        </Link>
        {!connect && (
          <Link href="/leaderboard">
            <div className="inline-block py-2 pl-2 mt-4 cursor-pointer hover:border-transparent lg:mt-0 lg:md:px-4">
              {isMobile ? (
                <Image
                  src="/Icons/leaderboard.png"
                  alt="leaderboard"
                  width={30}
                  height={30}
                  loader={customLoader}
                />
              ) : (
                <>Leaderboard</>
              )}
            </div>
          </Link>
        )}
        {connect && !logout && (
          <Link href="/connect">
            <Button className="border-none">Connect</Button>
          </Link>
        )}
        {connect && logout && (
          <Button
            className="border-none"
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            Logout
          </Button>
        )}
      </div>
    </nav>
  )
}

export default Header
