import React from 'react'
import "../Navbar/Navbar.css"
import { NavLink } from 'react-router-dom'

export const  Navbar =() => {
  return (

    <div className='navabr-main-container'>


        <span className='title'>My Socials</span>

        <div className='navbar-links'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/bookmarks">Bookmarks</NavLink>
            <NavLink to="/likedpost">LikedPost</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </div>
         
      
    </div>
  )
}
