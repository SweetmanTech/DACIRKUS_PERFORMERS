import Modal from "../Modal"
import WalletPowerUpButton from "./WalletPowerUpButton"
import SpotifyPowerUpButton from "./SpotifyPowerUpButton"
import StartGameWithPowerUpButton from "./StartGameWithPowerUpButton"

const PowerUpModal = ({ handleClick }) => (
  <Modal
    id="unlock_modal"
    isVisible
    onClose={() => null}
    containerClassName="rounded-[30px] md:rounded-[56px] overflow-hidden bg-black
        drop-shadow-[2px_3px_2px_rgba(255,255,255,0.25)]"
    modalClassName="!z-[110]"
  >
    <div
      className="px-4 py-8 samsungS8:p-6 xs:p-8 xl:p-6 rounded-lg font-arcade
            flex-col flex justify-between items-center
            min-h-[300px]
            md:w-[692px] md:h-[528px]
            bg-black"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-xl md:text-4xl text-white uppercase text-center">
          Choose your Power Ups
        </div>
        <div className="text-lg md:text-xl text-white uppercase text-center">
          extra lives, extra money, easier enemies
        </div>
      </div>
      <SpotifyPowerUpButton />
      <WalletPowerUpButton />
      <StartGameWithPowerUpButton onClick={handleClick} />
    </div>
  </Modal>
)

export default PowerUpModal
