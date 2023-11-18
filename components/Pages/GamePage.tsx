import { TITLE } from "../../lib/consts"

const GamePage = () => (
  <div>
    <iframe id="godotGame" src="/game/index.html" title={TITLE} className="h-[100vh] w-[100vw]" />
  </div>
)

export default GamePage
