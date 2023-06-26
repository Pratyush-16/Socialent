import React, { useContext } from 'react'
import "../Navbar/Navbar.css"
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'

export const  Navbar =() => {

  const{state:{userProfile}} = useContext(DataContext)
  return (

    <div className='navabr-main-container'>


        <span className='title'>My Socials</span>

        <div className='navbar-links'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/bookmarks">Bookmarks</NavLink>
            <NavLink to="/likedpost">LikedPost</NavLink>
            <NavLink to={`profile/${userProfile?._id}`}>Profile</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </div>
         
      
    </div>
  )
}
