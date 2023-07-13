import { useEffect, useState } from "react"

const Timer = () => {
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
    <div className="bg-white p-[10px] xl:p-[20px] rounded-[10px]">
      <div className="grid grid-cols-4 gap-x-[10px] xl:gap-x-[30px]">
        <div>
          <div
            className="font-quicksand font-bold 
          text-[7px] xl:text-[20px]
          text-center pb-[15px]"
          >
            DAYS
          </div>
          <div
            className="grid grid-cols-2 
          gap-x-[5px] xl:gap-x-[10px]"
          >
            <div
              className="text-center text-white
              text-[35px] xl:text-[102px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] xl:min-w-[101px]"
            >
              {days.length > 1 ? days[0] : "0"}
            </div>
            <div
              className="text-center text-white 
              text-[35px] xl:text-[102px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] xl:min-w-[101px]"
            >
              {days.length > 1 ? days[1] : days[0]}
            </div>
          </div>
        </div>
        <div>
          <div
            className="font-quicksand font-bold
          text-[7px] xl:text-[20px]
          text-center pb-[15px]"
          >
            HOURS
          </div>
          <div
            className="grid grid-cols-2
          gap-x-[5px] xl:gap-x-[10px]"
          >
            <div
              className="text-center text-white
              text-[35px] xl:text-[102px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] xl:min-w-[101px]"
            >
              {hours.length > 1 ? hours[0] : "0"}
            </div>
            <div
              className="text-center text-white
              text-[35px] xl:text-[102px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] xl:min-w-[101px]"
            >
              {hours.length > 1 ? hours[1] : hours[0]}
            </div>
          </div>
        </div>
        <div>
          <div
            className="font-quicksand font-bold
          text-[7px] xl:text-[20px]
          text-center pb-[15px]"
          >
            MINUTES
          </div>
          <div
            className="grid grid-cols-2
          gap-x-[5px] xl:gap-x-[10px]"
          >
            <div
              className="text-center text-white
              text-[35px] xl:text-[102px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] xl:min-w-[101px]"
            >
              {minutes.length > 1 ? minutes[0] : "0"}
            </div>
            <div
              className="text-center text-white
              text-[35px] xl:text-[102px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] xl:min-w-[101px]"
            >
              {minutes.length > 1 ? minutes[1] : minutes[0]}
            </div>
          </div>
        </div>
        <div>
          <div
            className="font-quicksand font-bold
          text-[7px] xl:text-[20px]
          text-center pb-[15px]"
          >
            SECONDS
          </div>
          <div
            className="grid grid-cols-2
          gap-x-[5px] xl:gap-x-[10px]"
          >
            <div
              className="text-center text-white
              text-[35px] xl:text-[102px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] xl:min-w-[101px]"
            >
              {seconds.length > 1 ? seconds[0] : "0"}
            </div>
            <div
              className="text-center text-white
              text-[35px] xl:text-[102px] font-medium font-quicksand bg-black rounded-[10px]
              min-w-[30px] xl:min-w-[101px]"
            >
              {seconds.length > 1 ? seconds[1] : seconds[0]}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer
