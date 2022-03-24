import { useGlobalContext } from "../data/context"
import { useLocation, Link, Outlet } from "react-router-dom"

const useAuth = () => {
  const { user } = useGlobalContext()
  return user && user.signedin
}

const PrivateRoutes = () => {
  const location = useLocation()
  const isAuth = useAuth
  return isAuth ? (
    <Outlet />
  ) : (
    <Link to="/" replace state={{ from: location }} />
  )
}


export default PrivateRoutes