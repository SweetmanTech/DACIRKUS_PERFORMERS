import Image from "next/image"
import { useTheme } from "../../providers/ThemeProvider"
import Newsletter from "./components/Newsletter"

interface ItemData {
  key: string
  list: string[]
}

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const Items: ItemData[] = [
    {
      key: "link-pages",
      list: ["Home", "FAQ"],
    },
    {
      key: "link-commnity",
      list: ["Discord", "Twitter"],
    },
    {
      key: "link-policy",
      list: ["Terms of Service", "Privacy Policy"],
    },
  ]

  const { themeMode } = useTheme()

  return (
    <div
      className={`footer dark:bg-[black] bg-transparent pt-[250px] md:pt-6 pb-6 w-full flex justify-center ${
        className || ""
      }`}
    >
      <div className="md:w-[1280px] w-[90%]">
        <div className="justify-start items-start flex md:hidden pt-6 pr-6">
          <Image
            src={
              themeMode === "light"
                ? "/assets/Landing/footer/mobile_logo.png"
                : "/assets/Landing/footer/mobile_white_logo.png"
            }
            width={58}
            height={10}
            alt="not found logo img"
          />
        </div>
        <div className="pt-6 pb-6 lg:p-12 grid grid-cols-10 md:grid-cols-5">
          <div className="justify-start items-start hidden md:flex">
            <Image
              src={
                themeMode === "light"
                  ? "/assets/Landing/footer/logo.png"
                  : "/assets/Header/white_logo.svg"
              }
              width={103}
              height={18}
              alt="not found logo img"
            />
          </div>
          {Items.map((item: ItemData) => (
            <div
              key={item.key}
              className="font-quicksand flex justify-start text[black] dark:text-white col-span-2 md:col-span-1"
            >
              <div className="flex flex-col cursor-[pointer] text-[8px] md:text-[16px]">
                {item.list.map((link: string) => (
                  <div key={link}>{link}</div>
                ))}
              </div>
            </div>
          ))}
          <Newsletter />
        </div>
      </div>
    </div>
  )
}

export default Footer
