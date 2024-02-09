import React from 'react'
import { Outlet,Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
     
     <Link to={"/"}>Home</Link>
     <Link to={"/Sign-in"}>Sign-in</Link>
     <Link to={"/sign-up"}>Sign-up</Link>
     <Outlet/>
    </>
   
  )
}
