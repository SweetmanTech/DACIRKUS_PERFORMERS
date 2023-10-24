import { useState } from "react"
import StartModal from "../StartModal"
import PowerUpsButton from "../PowerUpsButton"
import PowerUpModal from "../PowerUpModal"

const GamePage = () => {
  const [openModal, setOpenModal] = useState(true)
  const [usePowerups, setUsePowerups] = useState(false)

  const handleClick = () => {
    setOpenModal(false)
  }

  const handlePowerUpClick = () => {
    setUsePowerups(true)
  }

  return (
    <div>
      {openModal && (
        <div>
          {usePowerups ? (
            <PowerUpModal handleClick={handleClick} />
          ) : (
            <StartModal handleClick={handleClick}>
              <PowerUpsButton onClick={handlePowerUpClick} />
            </StartModal>
          )}
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
