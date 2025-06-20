import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const ProtectedRoutes = ({user}) => {
  return (
    user?<Outlet/>:<Navigate to={"/"}/>
  )
}

export default ProtectedRoutes