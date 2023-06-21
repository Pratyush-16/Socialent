import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router'

export const  RequireAuth =({children}) => {

    const {token} = useContext(AuthContext)

  return (
    <div>
      {
        token?(children) :<Navigate to="/landing" />
      }
    </div>
  )
}
