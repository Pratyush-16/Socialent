import React, { useContext, useEffect } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

import { getAllPost } from '../../services/PostService'
import PostCard from '../../components/PostCard/PostCard'
import { DataContext } from '../../context/DataContext'


export default function Home() {

   const {posts,userProfile, dispatch}= useContext(DataContext)
   console.log(posts, userProfile ,"userprofiles list")

  

  const allUsers = userProfile;
  console.log(allUsers,"userprofiles")
  

  //  const currentUserList =  userProfile?.following?.map((list)=>list.username)
  //  console.log(currentUserList ,"users")

  
 

  return (
    <div>
        <div>
        <Navbar/>
        </div>

        {/* <div>
          {userProfile?.map(user) => }
        </div> */}

        
        
    
    </div>
  )
}
