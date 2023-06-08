import Image from "next/image"
import { useTheme } from "../../providers/ThemeProvider"

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
      className={`dark:bg-[black] bg-white pt-[250px] md:pt-6 pb-6 w-full flex justify-center ${
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
          <div className="justify-end items-start hidden md:flex">
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
              className="font-quicksand flex justify-start text[black] dark:text-white col-span-2 md:col-span-1"
            >
              <div className="flex flex-col cursor-[pointer] text-[8px] md:text-[16px]">
                {item.list.map((link: string) => (
                  <div key={link}>{link}</div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col items-start pl-4 md:p-0 md:block col-span-4 md:col-span-1">
            <div className="font-quicksand text-[8px] md:text-[16px] dark:text-[white] text-[black]">
              Join our newsletter
            </div>
            <div className="relative p-0 md:pt-[0.5rem] w-[116px] md:w-[202px]">
              <input
                className="text-[8px] md:text-[16px]  border-[1px] border-[black] rounded-[3rem] !w-[116px] md:!w-full font-quicksand px-[10px] md:px-3 py-1"
                placeholder="Email Address"
              />
              <div className="absolute top-[0.5px] right-[5px] md:top-[10px] md:right-[0px] md:right-[10px]">
                <button
                  type="button"
                  className="bg-[black] px-2 py-[1px] md:py-1 rounded-[2rem] text-[white] text-[0.5rem]"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
