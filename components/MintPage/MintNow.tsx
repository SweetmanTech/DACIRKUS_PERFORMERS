import Link from "next/link"
import { useEffect, useState } from "react"
import SectionContainer from "./SectionContainer"
import Title from "../Common/Title"
import Content from "../Common/Content"
import Character from "./Character"
import Media from "../../shared/Media"

const MintNow = () => {
  const [days, setDays] = useState("00")
  const [hours, setHours] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00")

  const mintDay = "27 Jul 2023 09:00:00 UTC"

  const getTime = () => {
    const time = Date.parse(mintDay) - Date.now()

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)).toString())
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24).toString())
    setMinutes(Math.floor((time / 1000 / 60) % 60).toString())
    setSeconds(Math.floor((time / 1000) % 60).toString())
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <SectionContainer>
      <div className="relative w-full h-[100vh] flex justify-center items-center">
        <div className="flex flex-col justify-between items-center h-[470px]">
          <Title text="Mint Your Cre8ors" />
          <div className="bg-white p-[20px] rounded-[10px]">
            <div className="grid grid-cols-4 gap-x-[30px]">
              <div>
                <div className="font-quicksand font-bold text-[20px] text-center pb-[15px]">
                  DAYS
                </div>
                <div className="grid grid-cols-2 gap-x-[10px]">
                  <div
                    className="text-center text-white text-[102px] font-medium font-quicksand bg-black rounded-[10px]
                  min-w-[101px]"
                  >
                    {days.length > 1 ? days[0] : "0"}
                  </div>
                  <div
                    className="text-center text-white text-[102px] font-medium font-quicksand bg-black rounded-[10px]
                  min-w-[101px]"
                  >
                    {days.length > 1 ? days[1] : days[0]}
                  </div>
                </div>
              </div>
              <div>
                <div className="font-quicksand font-bold text-[20px] text-center pb-[15px]">
                  HOURS
                </div>
                <div className="grid grid-cols-2 gap-x-[10px]">
                  <div
                    className="text-center text-white text-[102px] font-medium font-quicksand bg-black rounded-[10px]
                  min-w-[101px]"
                  >
                    {hours.length > 1 ? hours[0] : "0"}
                  </div>
                  <div
                    className="text-center text-white text-[102px] font-medium font-quicksand bg-black rounded-[10px]
                  min-w-[101px]"
                  >
                    {hours.length > 1 ? hours[1] : hours[0]}
                  </div>
                </div>
              </div>
              <div>
                <div className="font-quicksand font-bold text-[20px] text-center pb-[15px]">
                  MINUTES
                </div>
                <div className="grid grid-cols-2 gap-x-[10px]">
                  <div
                    className="text-center text-white text-[102px] font-medium font-quicksand bg-black rounded-[10px]
                  min-w-[101px]"
                  >
                    {minutes.length > 1 ? minutes[0] : "0"}
                  </div>
                  <div
                    className="text-center text-white text-[102px] font-medium font-quicksand bg-black rounded-[10px]
                  min-w-[101px]"
                  >
                    {minutes.length > 1 ? minutes[1] : minutes[0]}
                  </div>
                </div>
              </div>
              <div>
                <div className="font-quicksand font-bold text-[20px] text-center pb-[15px]">
                  SECONDS
                </div>
                <div className="grid grid-cols-2 gap-x-[10px]">
                  <div
                    className="text-center text-white text-[102px] font-medium font-quicksand bg-black rounded-[10px]
                  min-w-[101px]"
                  >
                    {seconds.length > 1 ? seconds[0] : "0"}
                  </div>
                  <div
                    className="text-center text-white text-[102px] font-medium font-quicksand bg-black rounded-[10px]
                  min-w-[101px]"
                  >
                    {seconds.length > 1 ? seconds[1] : seconds[0]}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Content
            content="Passports: July 27th @ 8am EST • Allowlist: July 28th @ 8am EST • Public Sale : July 29th 8am EST"
            className="!text-[13px]"
          />
        </div>
      </div>
      <div>
        <Character
          link="/assets/Mint/MintNow/character.svg"
          originWidth={345.89}
          originHeight={692.14}
          className="!absolute bottom-0 left-0"
          screenWidth={1440}
        />
        <Link href="/faq" target="_self">
          <div className="cursor-pointer">
            <Media
              link="/assets/Mint/help.png"
              type="image"
              containerClasses="!absolute right-[70px] bottom-[30px] z-[10]
              w-[25px] h-[25px] xl:w-[51px] xl:h-[51px]"
            />
          </div>
        </Link>
      </div>
    </SectionContainer>
  )
}

export default MintNow
