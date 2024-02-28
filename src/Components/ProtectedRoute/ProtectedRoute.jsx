import React, { useContext } from 'react'
import { authContext } from '../../Contexts/AuthContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
  const {userIsLoggedIn} = useContext(authContext)

  return (
    <>
    {userIsLoggedIn ? children : <Navigate to={'/login'}/>}
    </>
  )
}
