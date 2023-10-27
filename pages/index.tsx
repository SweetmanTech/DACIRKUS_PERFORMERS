import GamePage from "../components/Pages/GamePage"
import SpotifyProvider from "../providers/SpotifyProvider"

const Game = () => (
  <SpotifyProvider>
    <GamePage />
  </SpotifyProvider>
)

export default Game
