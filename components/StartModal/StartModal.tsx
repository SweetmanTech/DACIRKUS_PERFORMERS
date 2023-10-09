import Modal from "../Modal"
import Button from "../Button"

const StartModal = ({ handleClick, children }) => (
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
            h-[300px]
            md:w-[692px] md:h-[528px]
            bg-black"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-xl md:text-4xl text-white uppercase">Hypersurveilled</div>
        <div className="text-lg md:text-xl text-white uppercase">by Heno</div>
      </div>
      <Button
        className="text-xl md:text-4xl flex pb-4 md:pb-8"
        id="play-button"
        onClick={handleClick}
      >
        Start Game
      </Button>
      {children}
    </div>
  </Modal>
)

export default StartModal
