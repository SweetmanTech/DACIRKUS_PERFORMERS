/* eslint-disable camelcase */
const playOnSpotify = (token) => {
  console.log("SWEETS PLAYING ON SPOTIFY")
  const player = new (window as any).Spotify.Player({
    name: "Web Playback SDK Quick Start Player",
    getOAuthToken: (cb) => {
      cb(token)
    },
  })
  console.log("SWEETS player", player)

  // Error handling
  player.addListener("initialization_error", () => {
    // console.error(message);
    localStorage.setItem("connected_spotify", "false")
  })
  player.addListener("authentication_error", () => {
    // console.error(message);
    localStorage.setItem("connected_spotify", "false")
  })
  player.addListener("account_error", () => {
    // console.error(message);
    localStorage.setItem("connected_spotify", "false")
  })
  player.addListener("playback_error", () => {
    // console.error(message);
    localStorage.setItem("connected_spotify", "false")
  })

  // Ready
  player.addListener("ready", ({ device_id }) => {
    // console.log('Ready with Device ID', device_id);
    const play = ({
      spotify_uri,
      playerInstance: {
        _options: { getOAuthToken },
      },
    }) => {
      getOAuthToken((access_token) => {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
          method: "PUT",
          body: JSON.stringify({ uris: [spotify_uri] }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        })
      })
      localStorage.setItem("connected_spotify", "true")

      getOAuthToken((access_token) => {
        fetch(`https://api.spotify.com/v1/me/following?type=artist&ids=1QzqrU2lmiW9l1mSvliVoM`, {
          method: "PUT",
          body: JSON.stringify({ ids: ["1QzqrU2lmiW9l1mSvliVoM"] }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        })
      })

      getOAuthToken((access_token) => {
        fetch(`https://api.spotify.com/v1/me/tracks?ids=0lVKEY8gEY5kYSpcAwgx3I`, {
          method: "PUT",
          body: JSON.stringify({ ids: ["0lVKEY8gEY5kYSpcAwgx3I"] }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        })
      })
    }

    play({
      playerInstance: player,
      spotify_uri: "spotify:track:0lVKEY8gEY5kYSpcAwgx3I",
    })
  })

  // Connect to the player!
  player.connect()
}

export default playOnSpotify
