import { useState } from "react"
import { useRouter } from "next/router"
import StartModal from "../StartModal"
import Button from "../Button"

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
            <Button
              id="power-up"
              onClick={handlePowerUpClick}
              type="button"
              className="text-lg md:text-2xl pb-4 md:pb-8"
            >
              play with power-ups
            </Button>
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
