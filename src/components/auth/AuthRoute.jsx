import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({children}) => {
  //use real data

  const { user } = useSelector((state)=> state.userInfo);
    const isPrivate = user?._id;
  return (
    isPrivate ? children : <Navigate to ="/login"></Navigate>
  )
}

export default AuthRoute