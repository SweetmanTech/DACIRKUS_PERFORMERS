import { useState } from "react"
import useBalanceOf from "../../hooks/useBalanceOf"
import useZoraMint from "../../hooks/useZoraMint"
import Spinner from "../Spinner"

const PowerUpsButton = () => {
  const [clicked, setClicked] = useState(false)
  const { mintWithRewards } = useZoraMint()
  const { fetchBalance } = useBalanceOf()

  const handleClick = async () => {
    setClicked(true)
    await mintWithRewards()
    await fetchBalance()
    setClicked(false)
  }

  return (
    <button onClick={handleClick} type="button" className="text-xs md:text-xl text-white">
      {clicked ? <Spinner /> : "play with power-ups"}
    </button>
  )
}

export default PowerUpsButton
