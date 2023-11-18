import GamePage from "../components/Pages/GamePage"
import SeoHead from "../components/SeoHead"
import SpotifyProvider from "../providers/SpotifyProvider"

const Game = () => (
  <SpotifyProvider>
    <GamePage />
    <SeoHead />
  </SpotifyProvider>
)

export default Game
