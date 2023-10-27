import { useState } from "react"
import PowerUpModal from "../PowerUpModal"

const PowerUpPage = () => {
  const [openModal, setOpenModal] = useState(true)

  const handleClick = () => {
    setOpenModal(false)
  }

  return (
    <div>
      {openModal && (
        <div>
          <PowerUpModal handleClick={handleClick} />
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

export default PowerUpPage
