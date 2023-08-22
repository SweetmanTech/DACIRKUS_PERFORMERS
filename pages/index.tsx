import { useEffect } from "react"

const Game = () => {
  useEffect(() => {
    const winAny = window as any
    winAny.receiveGameData = (data) => {
      console.log("SWEETS Received from Godot:", data)
    }
  }, [])

  return (
    <div>
      <iframe src="/game/index.html" title="Hypersurveilled" className="h-[100vh] w-[100vw]" />
    </div>
  )
}

export default Game
