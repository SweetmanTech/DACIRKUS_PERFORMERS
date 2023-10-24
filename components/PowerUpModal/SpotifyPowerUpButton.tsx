import { useSpotifyProvider } from "../../providers/SpotifyProvider"
import Button from "../Button"

const SpotifyPowerUpButton = () => {
  const { deviceId, login } = useSpotifyProvider()

  const handleClick = async () => {
    if (!deviceId) {
      login()
    }
  }

  return (
    <Button onClick={handleClick}>
      {deviceId ? (
        <div>
          <span className="mt-4">✅</span> Spotify Connected!!!
        </div>
      ) : (
        "Connect Spotify"
      )}
    </Button>
  )
}

export default SpotifyPowerUpButton
