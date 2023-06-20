import React, { useEffect } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

import { getAllPost } from '../../services/PostService'
import PostCard from '../../components/PostCard/PostCard'


export default function Home() {

  // const {state:{posts,userProfile}} = use
  
 

  return (
    <div>
        <div>
        <Navbar/>
        </div>

        <div>

        </div>

        {/* <div className='post-main-container'>

          <PostCard/>
        </div> */}

        
    
    </div>
  )
}
