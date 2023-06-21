import React, { useContext, useEffect } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

import { getAllPost } from '../../services/PostService'
import PostCard from '../../components/PostCard/PostCard'
import { DataContext } from '../../context/DataContext'


export default function Home() {

   const {state:{posts,userProfile}}= useContext(DataContext)
   console.log(posts, userProfile)

  //  const currentUserList =  userProfile?.following?.map((list)=>list.username)
  //  console.log(currentUserList ,"users")
  
 

  return (
    <div>
        <div>
        <Navbar/>
        </div>

        
        
    
    </div>
  )
}
