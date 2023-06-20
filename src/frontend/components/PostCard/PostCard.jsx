import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import { getAllPost } from '../../services/PostService';

export default function PostCard() {

    const {state ,dispatch} = useContext(DataContext)

    const allPost = state?.posts;
    console.log(allPost,"allPost")

    useEffect(()=> 
    {
      getAllPost(dispatch)
    },[])
  

  return (
    <div>
        
        {allPost?.map((post) =>( 
            <div key={post.id}>
            <p>{post.content}</p>
            </div>
        ))}
      
    </div>
  )
}
