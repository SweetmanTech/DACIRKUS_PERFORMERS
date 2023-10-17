import querystring from "querystring"
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI, SPOTIFY_STATE_KEY } from "../consts"
import generateRandomString from "./generateRandomString"

const spotifyLogin = (reply) => {
  console.log("SWEETS SPOTIFY OAUTH")
  const state = generateRandomString(16)
  const scope = "user-read-private user-read-email streaming user-follow-modify user-library-modify"
  const query = querystring.stringify({
    response_type: "code",
    client_id: SPOTIFY_CLIENT_ID,
    scope,
    redirect_uri: SPOTIFY_REDIRECT_URI,
    state,
  })

  reply.cookie(SPOTIFY_STATE_KEY, state)
  document.cookie = `${SPOTIFY_STATE_KEY}=${state};`

  window.location.href = `https://accounts.spotify.com/authorize?${query}`
}

export default spotifyLogin
