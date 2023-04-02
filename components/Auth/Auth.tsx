import { useEffect } from "react"
import { useUserProvider } from "../../providers/UserProvider"
import LoadingPage from "../LoadingPage"
import LoginPage from "../LoginPage"

const Auth = ({ children, url }) => {
  const { userIsLoggedIn, user, setUrl } = useUserProvider()
  useEffect(() => {
    setUrl(url)
  }, [url, setUrl])
  return (
    <>
      {user?.loading && <LoadingPage />}
      {!userIsLoggedIn && !user?.loading && <LoginPage />}
      {userIsLoggedIn && !user?.loading && children}
    </>
  )
}

export default Auth
