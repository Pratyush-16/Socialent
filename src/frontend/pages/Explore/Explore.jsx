import React, { useContext } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import PostCard from '../../components/PostCard/PostCard'
import PostList from '../../components/PostList/PostList'
import { DataContext } from '../../context/DataContext'

export default function Explore() {

  const {state:{posts,userProfile,users}}= useContext(DataContext)


  return (

    <div>
       

       <PostList postState={posts}/>
      
    </div>
  )
}
