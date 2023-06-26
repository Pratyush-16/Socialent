import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router'

export const  RequireAuth =({children}) => {

    const {token} = useContext(AuthContext)
    const location = useLocation();

  return (
    <div>
      {
        token ? (children) : <Navigate to="/user" state={{ from: location }} />
      }
    </div>
  )
}
