import { useState } from "react"
import StartModal from "../StartModal"
import PowerUpsButton from "../PowerUpsButton"

const GamePage = () => {
  const [openModal, setOpenModal] = useState(true)

  const handleClick = () => {
    setOpenModal(false)
  }

  return (
    <div>
      {openModal && (
        <StartModal handleClick={handleClick}>
          <PowerUpsButton onClick={handleClick} />
        </StartModal>
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
