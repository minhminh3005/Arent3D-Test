
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext'

const RequireAuth = () => {
  const {loggedIn} = useAuthContext();
  const location = useLocation();
  return (
    <>
        {loggedIn ? <Outlet /> : <Navigate to='/login' state={{from: location}} replace />}
    </>
  )
}

export default RequireAuth