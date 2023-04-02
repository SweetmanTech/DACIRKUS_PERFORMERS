import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { magic } from "../lib/magic"
import { UserContext } from "./UserContext"

export const useUserProvider = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [url, setUrl] = useState("/")
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault()

      const didToken = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL(url, window.location.origin).href,
      })

      // Send this token to our validation endpoint
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${didToken}`,
        },
      })

      // If successful, update our user state with their metadata and route to the dashboard
      if (res.ok) {
        const userMetadata = await magic.user.getMetadata()
        setUser(userMetadata)
        setUserIsLoggedIn(true)
      }
    },
    [email, url],
  )

  const logout = useCallback(() => {
    // Call Magic's logout method, reset the user state, and route to the login page
    magic.user.logout().then(() => {
      setUser({ user: null })
      setUserIsLoggedIn(false)
    })
  }, [])

  useEffect(() => {
    // Set loading to true to display our loading message within pages/index.js
    setUser({ loading: true })
    setLoading(true)
    // Check if the user is authenticated already
    magic.user.isLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        // Pull their metadata, update our state, and route to dashboard
        magic.user.getMetadata().then((userData) => setUser(userData))
        setUserIsLoggedIn(true)
      } else {
        // If false, route them to the login page and reset the user state
        setUserIsLoggedIn(false)
        setUser({ user: null })
      }
    })
    // Add an empty dependency array so the useEffect only runs once upon page load
  }, [])

  useEffect(() => {
    if (user?.issuer) {
      setUserIsLoggedIn(true)
      setLoading(false)
    }
  }, [user])

  const value = useMemo(
    () => ({
      user,
      setUser,
      userIsLoggedIn,
      setUserIsLoggedIn,
      handleLogin,
      email,
      setEmail,
      logout,
      loading,
      setLoading,
      setUrl,
    }),
    [
      user,
      setUser,
      userIsLoggedIn,
      setUserIsLoggedIn,
      handleLogin,
      email,
      setEmail,
      logout,
      loading,
      setLoading,
      setUrl,
    ],
  )
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
