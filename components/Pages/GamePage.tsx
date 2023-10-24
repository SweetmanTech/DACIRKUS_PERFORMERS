import { useState } from "react"
import { useRouter } from "next/router"
import StartModal from "../StartModal"
import PowerUpsButton from "../PowerUpsButton"

const GamePage = () => {
  const [openModal, setOpenModal] = useState(true)
  const { push } = useRouter()

  const handleClick = () => {
    setOpenModal(false)
  }

  const handlePowerUpClick = () => {
    push("/powerup")
  }

  return (
    <div>
      {openModal && (
        <div>
          <StartModal handleClick={handleClick}>
            <PowerUpsButton onClick={handlePowerUpClick} />
          </StartModal>
        </div>
      )}

      <iframe
        id="godotGame"
        src="/game/index.html"
        title="Hypersurveilled"
        className="h-[100vh] w-[100vw]"
      />
    </div>
  )
}

export default GamePage
