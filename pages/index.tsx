import { useEffect } from "react"

const Game = () => {
  useEffect(() => {
    const winAny = window as any
    winAny.receiveGameData = (data) => {
      console.log("SWEETS Received from Godot:", data)
      // Handle your data here, maybe using React's state or context
    }
  }, [])

  return (
    <div>
      <iframe src="/game/index.html" title="Hypersurveilled" className="h-[90vh] w-[100vw]" />
    </div>
  )
}

export default Game
