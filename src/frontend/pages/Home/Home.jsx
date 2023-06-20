import React, { useEffect } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

import { getAllPost } from '../../services/PostService'
import PostCard from '../../components/PostCard/PostCard'


export default function Home() {
  
 

  return (
    <div>
        <div>
        <Navbar/>
        </div>
        <div>
          <PostCard/>
        </div>

        
    
    </div>
  )
}
