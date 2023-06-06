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
      className={`dark:bg-[black] bg-white pt-6 pb-6 w-full flex justify-center ${className || ""}`}
    >
      <div className="md:w-[1280px]">
        <div className="flex items-start justify-end pt-6 pr-6 md:hidden">
          <Image
            src={
              themeMode === "light"
                ? "/assets/Landing/footer/logo.png"
                : "/assets/Landing/footer/logo_white.png"
            }
            width={103}
            height={18}
            alt="not found logo img"
          />
        </div>
        <div className="px-[5px] pt-6 pb-6 lg:p-12 grid grid-cols-3 md:grid-cols-5">
          <div className="items-start justify-end hidden md:flex">
            <Image
              src={
                themeMode === "light"
                  ? "/assets/Landing/footer/logo.png"
                  : "/assets/Landing/footer/logo_white.png"
              }
              width={103}
              height={18}
              alt="not found logo img"
            />
          </div>
          {Items.map((item: ItemData) => (
            <div
              key={item.key}
              className="font-quicksand flex justify-center text[black] dark:text-white"
            >
              <div className="flex flex-col cursor-[pointer]">
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
