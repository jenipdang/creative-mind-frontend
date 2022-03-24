import { Redirect, Route } from 'react-router-dom'



// export const ProtectedRoute = ({ children }) => {
//   const { user } = useGlobalContext()
//   // const location = useLocation()

//   if (!user) {
//     return <Redirect to='/' />
//   }
//   return children
// }
const ProtectedRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          isAuthenticated
            ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/',
                  state: { from: location }
                }}
              />
            ))
      }
    />
  );
}
export default ProtectedRoute