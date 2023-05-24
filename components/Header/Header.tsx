import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { useMediaQuery } from "usehooks-ts"
import MobileMenu from "../MobileMenu"
import DesktopMenu from "../DesktopMenu"

interface HeaderProps {
  connect?: boolean
}
const Header: FC<HeaderProps> = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <nav className="fixed top-0 z-50 flex flex-row items-center justify-between w-screen p-2 text-black bg-white lg:md:justify-around">
      <span className="relative items-center flex-shrink-0 w-20 mr-6 cursor-auto lg:md:mt-6 lg:mt-0 lg:md:w-36 lg:flex">
        <Link href="/">
          <Image
            src="/CRE8ORS_LOGO.svg"
            alt="cre8ors logo"
            width={87}
            height={16}
            className="cursor-pointer"
          />
        </Link>
      </span>

      <div className="flex-row items-center text-sm rounded lg:items-right lg:w-auto lg:md:text-sm font-quicksand">
        {isMobile && <MobileMenu />}
        {!isMobile && <DesktopMenu />}
      </div>
    </nav>
  )
}

export default Header
