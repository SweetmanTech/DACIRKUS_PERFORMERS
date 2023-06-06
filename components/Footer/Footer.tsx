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
      className={`dark:bg-[black] bg-white pt-6 pb-6 w-full flex justify-center ${className || ""}`}
    >
      <div className="md:w-[1280px]">
        <div className="justify-end items-start flex md:hidden pt-6 pr-6">
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
              className="font-quicksand flex justify-center text[black] dark:text-white"
            >
              <div className="flex flex-col cursor-[pointer]">
                {item.list.map((link: string) => (
                  <div key={link}>{link}</div>
                ))}
              </div>
            </div>
          ))}
          <div className="col-span-3 flex flex-col items-center pt-6 md:block md:pt-0 md:col-span-1">
            <div className="font-quicksand dark:text-[white] text-[black]">Join our newsletter</div>
            <div className="relative pt-[0.5rem] w-[190px] md:w-[202px]">
              <input
                className="border-[1px] border-[black] rounded-[3rem] font-quicksand px-3 py-1"
                placeholder="Email Address"
              />
              <div className="absolute top-[10px] right-[0px] md:right-[10px]">
                <button
                  type="button"
                  className="bg-[black] px-2 py-1 rounded-[2rem] text-[white] text-[0.5rem]"
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
