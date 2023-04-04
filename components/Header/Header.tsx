import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import customLoader from "../../lib/customLoader"

interface HeaderProps {
  contactHref?: string
  aboutHref?: string
}
const Header: FC<HeaderProps> = () => (
  <nav className="fixed top-0 z-50 flex flex-row items-center justify-between w-screen p-2 text-black bg-white font-objektivmk1_bold">
    <span className="relative items-center flex-shrink-0 w-20 mt-6 mr-6 cursor-auto lg:mt-0 lg:md:w-36 lg:flex">
      <Link href="/">
        <Image
          src="/CRE8ORSLOGO_ICON.png"
          alt="cre8ors logo"
          width={25}
          height={36}
          className="cursor-pointer"
          loader={customLoader}
        />
      </Link>
    </span>

    <div className="flex-row items-center text-xs rounded lg:items-right lg:w-auto lg:md:text-sm font-objektivmk1_bold ">
      <Link href="/">
        <div className="inline-block pl-2 mt-4 cursor-pointer text-md hover:border-transparent lg:mt-0 lg:md:px-4">
          Twitter
        </div>
      </Link>
      <Link href="/">
        <div className="inline-block pl-2 mt-4 cursor-pointer text-md hover:border-transparent lg:mt-0 lg:md:px-4">
          Discord
        </div>
      </Link>
      <Link href="/">
        <div className="inline-block py-2 pl-2 mt-4 cursor-pointer hover:border-transparent lg:mt-0 lg:md:px-4">
          Newsletter
        </div>
      </Link>
      <Link href="/leaderboard">
        <div className="inline-block py-2 pl-2 mt-4 cursor-pointer hover:border-transparent lg:mt-0 lg:md:px-4">
          Leaderboard
        </div>
      </Link>
    </div>
  </nav>
)

export default Header
