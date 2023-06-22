import React, { useContext, useEffect } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

import { getAllPost } from '../../services/DataServices'
import PostCard from '../../components/PostCard/PostCard'
import { DataContext } from '../../context/DataContext'
import PostList from '../../components/PostList/PostList'
import AddPost from '../../components/AddPost/AddPost'


export default function Home() {

   const {state:{posts,userProfile,users}}= useContext(DataContext)
   //console.log(posts, users , userProfile"userprofiles list")

  

  

  
 

  return (
    <div>

      <AddPost/>
        
        <PostList postState={posts}/>

        
    
    </div>
  )
}
