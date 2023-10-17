/* eslint-disable camelcase */
import Request from "request"

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI
const STATE_KEY = "spotify_auth_state"

/*
 * Handle Spotify authentication, refresh, and callback.
 */
const Spotify = (spotify) => {
  const spotifyCallback = (request, reply) => {
    const { query, cookies } = request
    const { code, state } = query
    const storedState = cookies ? cookies[STATE_KEY] : null

    if (state === null || state !== storedState) {
      reply.redirect("/")
    } else {
      reply.clearCookie(STATE_KEY)

      const AUTHENTICATION_OPTIONS = {
        url: "https://accounts.spotify.com/api/token",
        form: {
          code,
          redirect_uri: REDIRECT_URI,
          grant_type: "authorization_code",
        },
        headers: {
          Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
        },
        json: true,
      }

      Request.post(AUTHENTICATION_OPTIONS, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const { access_token } = body

          const options = {
            url: "https://api.spotify.com/v1/me",
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
            json: true,
          }

          Request.get(options, async (error, response, body) => {
            const { id } = body

            await spotify.updateOne(
              { id },
              {
                $set: {
                  user: body,
                },
                $inc: {
                  plays: 1,
                },
              },
              { upsert: true },
            )

            if (body.product === "premium") {
              reply.cookie("hateu_token", access_token)
            } else {
              reply.clearCookie("hateu_token")
            }
            reply.sendFile("html/selectcharacter.html")
          })
        } else {
          reply.redirect("/")
        }
      })
    }
  }

  return {
    spotifyLogin,
    spotifyCallback,
  }
}

export default Spotify
