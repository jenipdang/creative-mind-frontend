import { Redirect, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../data/context'


export const ProtectedRoute = ({ children }) => {
  const { user } = useGlobalContext()
  const location = useLocation()

  if (!user) {
    return <Redirect to='/' state={{ path: location.pathname }} />
  }
  return children
}