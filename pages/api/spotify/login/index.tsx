// api/spotifyLogin.js
import querystring from "querystring"
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI, SPOTIFY_STATE_KEY } from "../../../../lib/consts"
import generateRandomString from "../../../../lib/spotify/generateRandomString"

export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log("SWEETS SPOTIFY OAUTH")
    const state = generateRandomString(16)
    const scope =
      "user-read-private user-read-email streaming user-follow-modify user-library-modify"
    const query = querystring.stringify({
      response_type: "code",
      client_id: SPOTIFY_CLIENT_ID,
      scope,
      redirect_uri: SPOTIFY_REDIRECT_URI,
      state,
    })
    console.log("SWEETS query", query)

    // Set the cookie on the client side (optional)
    const cookieHeaderValue = `${SPOTIFY_STATE_KEY}=${state}; Path=/; HttpOnly`
    res.setHeader("Set-Cookie", cookieHeaderValue)

    console.log("SWEETS header set", cookieHeaderValue)

    // Redirect the user to Spotify's authorization URL
    const redirectUrl = `https://accounts.spotify.com/authorize?${query}`
    res.redirect(302, redirectUrl)
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
