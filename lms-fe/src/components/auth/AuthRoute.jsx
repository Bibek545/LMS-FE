import React from 'react'
import { Navigate } from 'react-router-dom';

const AuthRoute = ({children}) => {
    const isPrivate = true;
  return (
    isPrivate ? children : <Navigate to ="/login"></Navigate>
  )
}

export default AuthRoute