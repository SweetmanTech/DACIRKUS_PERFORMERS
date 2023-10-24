import PowerUpPage from "../../components/Pages/PowerupPage"
import SpotifyProvider from "../../providers/SpotifyProvider"

const Powerup = () => (
  <SpotifyProvider>
    <PowerUpPage />
  </SpotifyProvider>
)

export default Powerup
